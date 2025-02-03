
import { Helmet } from 'react-helmet-async';

const Signin = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className='max-w-[1250px] mx-auto'>
                <div className='max-w-11/12 mx-auto'>
                    <div className="hero  min-h-screen ">
                        <div className="hero-content flex-col -mt-9 ">
                            <div className="text-center">
                                <h1 className="text-5xl font-bold">Login now!</h1>

                            </div>
                            <div className="bg-[#9538E2] card  w-full max-w-sm shrink-0 shadow-2xl">
                                <div className="card-body">
                                    <fieldset className="fieldset">
                                        <label className="fieldset-label">Email</label>
                                        <input type="email" className="input" placeholder="Email" />
                                        <label className="fieldset-label">Password</label>
                                        <input type="password" className="input" placeholder="Password" />
                                        <div><a className="link link-hover">Forgot password?</a></div>
                                        <button className="btn btn-neutral mt-4">Login</button>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;