import camelCase from 'camelcase'
const TextInout = ({ label, type }) => {
  return (
    <>
      <label
        htmlFor={camelCase(label)}
        className="text-lg font-semibold leading-tight"
      >
        {label}
      </label>
      <input
        required
        id={camelCase(label)}
        name={camelCase(label)}
        className="h-10 px-2 w-full text-white bg-indigo-700 rounded mt-2 focus:outline-none shadow"
        type={type}
      />
    </>
  )
}
export default TextInout
