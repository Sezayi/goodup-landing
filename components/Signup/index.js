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
      name: this.state.name
    };
    usersRef.push(user, () => {
      // this.props.history.push('/thankyou');
    });
    this.setState({
      email: "",
      name: ""
    });
  }

  componentDidMount() {
    this.inputNameRef.current.focus();
  }

  render() {
    return (
      <div className="flex-1 flex justify-center lg:items-center flex-col">
        <div className="lg:w-3/4 px-16 lg:mt-64 h-full overflow-x-hidden ">
          <h2 className="font-edmondsans text-action text-24 mt-48 mb-8 lg:mt-0">
            Download it for free
          </h2>
          <h1 className="font-edmondsans-medium text-descriptive text-40 mb-32">
            {" "}
            The SME purpose Ebook
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
                placeholder="John Good"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="font-edmondsans text-descriptive flex flex-col mb-32">
              <label className="mb-8 font-edmondsans-medium" htmlFor="name">
                Work e-mail
              </label>
              <input
                className="shadow-1 appearance-none border border-grey rounded w-full py-12 px-8 focus:outline-none focus:border-action focus:shadow-3"
                type="email"
                id="email"
                placeholder="you@yourwork.com"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="font-edmondsans text-descriptive mb-32">
              <label>
                <input
                  type="checkbox"
                  name="hasAgreed"
                  required={true}
                  value={this.state.hasAgreed}
                  onChange={this.handleChange}
                />{" "}
                I agree to all statements in the <a href="">terms of service</a>
              </label>
            </div>

            <div className="mb-32">
              <button className="font-edmondsans-medium text-white text-center w-full lg:w-2/5 rounded bg-action py-16 px-16 hover:bg-action-shade40">
                Download E-book
              </button>
            </div>
            <p className="font-edmondsans text-descriptive">Learn more about purpose on  <a className="text-action hover:underline" href="https://www.goodup.com">www.goodup.com</a></p>
          </form>

          <p className="font-edmondsans text-descriptive mt-32">Wat is Lorem Ipsum?
          Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.

          Waarom gebruiken we het?
          Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot "Hier uw tekst, hier uw tekst" wat het tot min of meer leesbaar nederlands maakt. Veel desktop publishing pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum als hun standaard model tekst, en een zoekopdracht naar "lorem ipsum" ontsluit veel websites die nog in aanbouw zijn. Verscheidene versies hebben zich ontwikkeld in de loop van de jaren, soms per ongeluk soms expres (ingevoegde humor en dergelijke).


          Waar komt het vandaan?
          In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in Virginia, heeft één van de meer obscure latijnse woorden, consectetur, uit een Lorem Ipsum passage opgezocht, en heeft tijdens het zoeken naar het woord in de klassieke literatuur de onverdachte bron ontdekt. Lorem Ipsum komt uit de secties 1.10.32 en 1.10.33 van "de Finibus Bonorum et Malorum" (De uitersten van goed en kwaad) door Cicero, geschreven in 45 v.Chr. Dit boek is een verhandeling over de theorie der ethiek, erg populair tijdens de renaissance. De eerste regel van Lorem Ipsum, "Lorem ipsum dolor sit amet..", komt uit een zin in sectie 1.10.32.

          Het standaard stuk van Lorum Ipsum wat sinds de 16e eeuw wordt gebruikt is hieronder, voor wie er interesse in heeft, weergegeven. Secties 1.10.32 en 1.10.33 van "de Finibus Bonorum et Malorum" door Cicero zijn ook weergegeven in hun exacte originele vorm, vergezeld van engelse versies van de 1914 vertaling door H. Rackham.</p>
          </div>
      </div>
    );
  }
}
