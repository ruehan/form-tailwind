import {useForm} from 'react-hook-form';

export default function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    setValue,
    reset,
    resetField
  } = useForm({ mode: "onChange" });

  const onVaild = () => {
    console.log('onVaild');
  }

  const onInvalid = (errors: any) => {
    console.log(errors);
  };

  return (
   <>
    <form onSubmit={handleSubmit(onVaild, onInvalid)} className="bg-blue-100 w-full h-screen flex justify-center items-center">
      <div className="bg-red-100 w-3/12 h-5/6 rounded-2xl shadow-md shadow-black flex flex-col items-center">
        <div className="flex justify-center items-center h-24 font-bold text-2xl">
          Job Application Form
        </div>
        <div className="flex flex-col items-start justify-center w-11/12 font-bold text-sm">
          What department do you want to work for?
          <div className="text-red-500">{errors.work?.message}</div>
          <label className="mt-4">
            <input
              className="mr-2"
              {...register('work', {required: "*required",})}
              type="radio"
              value="Sales" />
              Sales
          </label>
          <label>
            <input
              className="mr-2"
              {...register('work', {required: "*required"})}
              type="radio"
              value="Marketing" />
              Marketing
          </label>
          <label>
            <input
              className="mr-2"
              {...register('work', {required: "*required"})}
              type="radio"
              value="Accounting" />
              Accounting
          </label>
          <label>
            <input
              className="mr-2"
              {...register('work', {required: "*required"})}
              type="radio"
              value="Customer Service" />
              Customer Service
          </label>
        </div>

        <div className="flex flex-col items-start justify-center w-11/12 font-bold mt-5 text-sm">
          Why do you want to join this company?
          <div className="text-red-500">{errors.why?.message}</div>
          <label className="mt-4">
            <input
              className="mr-2"
              {...register('why', {required: "*required"})}
              type="radio"
              value="I want money" />
              I want money!
          </label>
          <label>
            <input
              className="mr-2"
              {...register('why', {required: "*required"})}
              type="radio"
              value="I love this company" />
              I love this company
          </label>
          <label>
            <input
              className="mr-2"
              {...register('why', {required: "*required"})}
              type="radio"
              value="I want to learn" />
              I want to learn
          </label>
          <label >
            <input
              className="mr-2"
              {...register('why', {required: "*required"})}
              type="radio"
              value="I don't know why" />
              I don't know why
          </label>
        </div>

        <div className="w-11/12 mt-5 font-bold flex-1 text-sm">
          <label>
            <div>Salary</div>
            <select className='w-11/12'
              {...register('salary', {required: true})}
              >
              <option>$50k</option>
              <option>$100k</option>
              <option>$150k</option>
              <option>$200k</option>
            </select>
          </label>
          <label>
            <div>Introduce yourself</div>
            <input
              className='w-11/12 h-24'
              {...register('introduce', {required: "Please write down your introduction."})}
              type="text"
              />
              <div className="text-red-500">{errors.introduce?.message}</div>
          </label>
          <label>
              <div>Tell us what your dreams are</div>
            <input
              className='w-11/12'
              {...register('dreams', {required: "Please tell us what your dreams are."})}
              type="text"
              />
              <div className="text-red-500">{errors.dreams?.message}</div>
          </label>
          <label>
            <div>Email</div>
            <input
              className='w-11/12'
              {...register('email', {required: "Please write down your email"})}
              type="email"
              />
              <div className="text-red-500">{errors.email?.message}</div>
          </label>

          <div className="w-full h-12 flex justify-center mt-2">
            <input className="bg-orange-400 w-9/12 rounded-2xl btn" type="submit" value="Give me this job" />
          </div>
        </div>

      </div>
    </form>
   </>
  )
}
