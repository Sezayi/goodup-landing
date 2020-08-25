import Router from "next/router";

export default class Signup extends React.Component {
  render() {
    return (
      <div className="flex-1 flex justify-center lg:items-center flex-col">
        <div className="lg:w-3/4 px-16 lg:mt-64 overflow-x-hidden ">
          <h2 className="font-edmondsans text-action text-24 mt-48 mb-8 lg:mt-0">
            Download this ebook for free
          </h2>
          <h1 className="font-edmondsans-medium text-descriptive text-32 mb-24">
            {" "}
            The complete guide to activate employees and embed purpose in your
            organisation
          </h1>
          <form
            method="POST"
            action="https://goodup.activehosted.com/proc.php"
            id="_form_5_"
            novalidate
          >
            <input type="hidden" name="u" value="5" />
            <input type="hidden" name="f" value="5" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />

            <div className=" font-edmondsans text-descriptive flex flex-col mb-24">
              <label className="mb-8 font-edmondsans-medium" htmlFor="name">
                Full Name
              </label>
              <input
                className="shadow-1 border border-grey rounded w-full py-12 px-8 focus:outline-none focus:border-action focus:shadow-3"
                type="text"
                id="name"
                placeholder="e.g. Anna Green"
                name="name"
                required={true}
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
                placeholder="e.g. GoodUp"
                name="company"
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
                placeholder="e.g. anna@goodup.com"
                name="email"
              />
            </div>
            <div className="font-edmondsans text-descriptive mb-24">
              <label>
                <input type="checkbox" name="hasAgreed" required={true} /> I
                agree to all statements in the{" "}
                <a
                  className="underline"
                  href="https://goodup.com/terms-and-policy/"
                >
                  terms and policy
                </a>
              </label>
            </div>

            <div className="mb-32">
              <button className="font-edmondsans-medium text-white text-center w-full lg:w-2/5 rounded bg-action py-16 px-16 hover:bg-action-shade40">
                Download E-book
              </button>
            </div>
            <p className="font-edmondsans text-descriptive">
              Learn more about purpose on{" "}
              <a
                className="text-action hover:underline"
                href="https://www.goodup.com"
              >
                www.goodup.com
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    );
  }
}
