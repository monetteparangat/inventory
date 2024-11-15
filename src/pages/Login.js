import '../style/Login.css'
import { useForm } from "react-hook-form"
import streetImg from '../assets/img/street.svg'

function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it
    return (
        <div className="login">
            <div className="container-login">
                <div>
                    <h1 className='welcome'>Welcome!</h1>
                    <h1 className='title'>Inventory System</h1>
                </div>
                <div className="wrapper-form">
                    <h1 className='title-login'>LOGIN</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='group-input'>
                            <label>Username</label>
                            <input {...register("example")} />
                        </div>
                        <div className='group-input'>
                            <label>Password</label>
                            <input type='password'{...register("exampleRequired")} />
                        </div>
                        <button type="submit" className='submit'>LOGIN</button>
                    </form>
                </div>
                <img src={streetImg} alt='street'/>
            </div>
        </div>
    );
}

export default Login;