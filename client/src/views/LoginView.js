import {useFormTextField} from "../components/hooks/textFieldHook";
import {useDispatch} from "react-redux";
import {loginUser} from "../store/user/actions";

export const LoginView = () => {
    const username = useFormTextField('username', '');
    const password = useFormTextField('password', '');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const loginData = {
            username: username.value,
            password: password.value
        };
        dispatch(loginUser(loginData));
    }

    return (
        <div className={"login-page"}>
            <div className={"login-form"}>
                <form onSubmit={handleSubmit}>
                    <input type={"text"} {...username}/>
                    <input type={"text"} {...password}/>
                    <button type={"submit"}>Login</button>
                </form>
            </div>
        </div>
    );
}