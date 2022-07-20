import React from "react";
import { SendButton } from "../../components/button/SendButton";
import { Input } from "../../components/input/Input";
import s from './NewPasswordPage.module.css'

export const NewPasswordPage = () => {
    return (
        <div className="modalField">
            <div>
                <h3 className={s.modalLoginText}>Create new password</h3>
            </div>
            <form className={s.form}>
                <div className="inputsBlock">
                    <Input placeHolder={'Password'} type={'password'} name={'password'} />
                </div>
                <p className={s.linkText}>Create new password and we will send you further instructions to email</p>
                <div >
                    <SendButton text={'Create new password'} />
                </div>
            </form>
        </div>
    )
}