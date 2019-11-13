import Router from 'next/router';

const firebase = require("../../node_modules/firebase");
const firebaseConfig = require("../../fire");

export default class Signup extends React.Component {
  constructor() {
    super();

    if (!firebase.apps.length) {
      try {
        firebase.initializeApp(firebaseConfig);
      } catch (err) {
        console.error("Firebase initialization error raised", err.stack);
      }
    }

    this.state = {
      email: "",
      company: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.inputNameRef = React.createRef();
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const usersRef = firebase.database().ref("users");
    const user = {
      email: this.state.email,
      company: this.state.company,
      name: this.state.name
    };
    this.setState({
      email: "",
      company: "",
      name: ""
    });
    usersRef.push(user)
    .then(() => {
      Router.push({pathname: '/thankyou'})
    })
    .catch(err => {
      window.alert('error:' + err)
    }
    )}

  componentDidMount() {
    this.inputNameRef.current.focus();
  }

  render() {
    return (
      <div className="flex-1 flex justify-center lg:items-center flex-col">
        <div className="lg:w-3/4 px-16 lg:mt-64 overflow-x-hidden ">
          <h2 className="font-edmondsans text-action text-24 mt-48 mb-8 lg:mt-0">
            Download this ebook for free
          </h2>
          <h1 className="font-edmondsans-medium text-descriptive text-32 mb-24">
            {" "}
            The complete guide to activate employees and embed purpose in your organisation
          </h1>
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className=" font-edmondsans text-descriptive flex flex-col mb-24">
              <label className="mb-8 font-edmondsans-medium" htmlFor="name">
                Full Name
              </label>
              <input
                className="shadow-1 border border-grey rounded w-full py-12 px-8 focus:outline-none focus:border-action focus:shadow-3"
                ref={this.inputNameRef}
                type="text"
                id="name"
                placeholder="First Lastname"
                name="name"
                required={true}
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className=" font-edmondsans text-descriptive flex flex-col mb-24">
              <label className="mb-8 font-edmondsans-medium" htmlFor="company">
                Your company name
              </label>
              <input
                className="shadow-1 border border-grey rounded w-full py-12 px-8 focus:outline-none focus:border-action focus:shadow-3"
                type="text"
                id="company"
                required={true}
                placeholder="i.e. The Good Company"
                name="company"
                value={this.state.company}
                onChange={this.handleChange}
              />
            </div>
            <div className="font-edmondsans text-descriptive flex flex-col mb-24">
              <label className="mb-8 font-edmondsans-medium" htmlFor="name">
                Work e-mail
              </label>
              <input
                className="shadow-1 appearance-none border border-grey rounded w-full py-12 px-8 focus:outline-none focus:border-action focus:shadow-3"
                type="email"
                id="email"
                required={true}
                placeholder="you@yourwork.com"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="font-edmondsans text-descriptive mb-24">
              <label>
                <input
                  type="checkbox"
                  name="hasAgreed"
                  required={true}
                  value={this.state.hasAgreed}
                  onChange={this.handleChange}
                />{" "}
                I agree to all statements in the <a className="underline" href="">terms of service</a>
              </label>
            </div>

            <div className="mb-32">
              <button className="font-edmondsans-medium text-white text-center w-full lg:w-2/5 rounded bg-action py-16 px-16 hover:bg-action-shade40">
                Download E-book
              </button>
            </div>
            <p className="font-edmondsans text-descriptive">Learn more about purpose on  <a className="text-action hover:underline" href="https://www.goodup.com">www.goodup.com</a></p>
          </form>


          </div>
      </div>
    );
  }
}
