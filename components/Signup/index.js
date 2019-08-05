const firebase = require('../../node_modules/firebase');
const firebaseConfig = require('../../fire');

export default class Signup extends React.Component {
                 constructor() {
                   super();

                   if (!firebase.apps.length) {
                     try {
                       firebase.initializeApp(firebaseConfig);
                     } catch (err) {
                       console.error(
                         "Firebase initialization error raised",
                         err.stack
                       );
                     }
                   }

                   this.state = {
                     email: "",
                     name: "",
                     hasAgreed: false
                   };

                   this.handleChange = this.handleChange.bind(
                     this
                   );
                   this.handleSubmit = this.handleSubmit.bind(
                     this
                   );

                   this.inputNameRef = React.createRef();
                 }

                 handleChange(e) {
                   let target = e.target;
                   let value =
                     target.type === "checkbox"
                       ? target.checked
                       : target.value;
                   let name = target.name;

                   this.setState({
                     [name]: value
                   });
                 }

                 handleSubmit(e) {
                   e.preventDefault();
                   const usersRef = firebase
                     .database()
                     .ref("users");
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
                       <div className='lg:w-2/4 px-16'>
                         <div className="font-serif text-48">Download it for free</div>
                         <div className="text-32"> The SME purpose Ebook</div>
                         <form
                           onSubmit={this.handleSubmit}
                           className="FormFields"
                         >
                           <div className="flex flex-col">
                             <label htmlFor="name">
                               Full Name
                             </label>
                             <input
                               ref={this.inputNameRef}
                               type="text"
                               id="name"
                               placeholder="John Good"
                               name="name"
                               value={this.state.name}
                               onChange={this.handleChange}
                             />
                           </div>
                           <div className="flex flex-col">
                             <label htmlFor="name">
                               Your work e-mail
                             </label>
                             <input
                               type="email"
                               id="email"
                               placeholder="you@yourwork.com"
                               name="email"
                               value={this.state.email}
                               onChange={this.handleChange}
                             />
                           </div>
                           <div className="">
                             <label>
                               <input
                                 type="checkbox"
                                 name="hasAgreed"
                                 required={true}
                                 value={this.state.hasAgreed}
                                 onChange={this.handleChange}
                               />{" "}
                               I agree to all statements in the{" "}
                               <a href="">terms of service</a>
                             </label>
                           </div>

                           <div>
                             <button>Download E-book</button>
                           </div>
                         </form>
                       </div>
                     </div>
                   );
                 }
               }
