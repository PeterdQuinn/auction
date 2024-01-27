import { useRef } from 'react';
import TextInput from '../../components/TextInput';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';
const signUp = () => {
  let form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
    //   console.log("payload", payload);
    // Place your API call here to submit your payload.
  };
  return (
    <section className="bg-indigo-600">
      <div className="mx-auto flex justify-center lg:items-center h-full flex-col">
        <h2 className="text-4xl leading-tight pt-8">The Auction</h2>
        <h3 className="text-2xl sm:text-3xl xl:text-2xl font-bold leading-tight my-4">
          Create Your Account
        </h3>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-white py-12 px-2 sm:px-0 grid gap-4"
        >
          <TextInput label="First Name" type="text" />
          <TextInput label="Last Name" type="text" />
          <TextInput label="Email" type="email" autocomplete="on" />
          <TextInput label="Password" type="password" />
          <CheckBox label="Forgot Password?" />
          <div className="px-2 sm:px-6">
            <Button label="Login" />
            <p className="mt-16 text-xs text-center">
              Don’t Have An Account?{' '}
              <a className="underline" href="javascript: void(0)">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
export default signUp;
