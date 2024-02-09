import { useRef } from 'react';
import TextInput from '@/components/TextInput';
import CheckBox from '@/components/CheckBox';
import Button from '@/components/Button';

const signUp = () => {
  return (
    <section className="bg-indigo-600">
      <div className="mx-auto flex justify-center lg:items-center h-full flex-col">
        <h1 className="text-4xl leading-tight pt-8">The Auction</h1>
        <h2 className="text-2xl sm:text-3xl xl:text-2xl font-bold leading-tight my-4">
          Create Your Account
        </h2>
        <form className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-white py-12 px-2 sm:px-0 grid gap-4">
          <TextInput label="First Name" type="text" />
          <TextInput label="Last Name" type="text" />
          <TextInput label="Email" type="email" autocomplete="on" />
          <TextInput label="Password" type="password" />
          <CheckBox label="Remember Password?" />
          <div className="px-2 sm:px-6">
            <Button label="Login" />
            <p className="mt-16 text-xs text-center">Don’t Have An Account?</p>
          </div>
        </form>
      </div>
    </section>
  );
};
export default signUp;
