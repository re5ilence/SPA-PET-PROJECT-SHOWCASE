import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './form.module.css';

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        navigate("/success", { state: { name: data.name } });
    };

    return (
        <div className={styles["form-container"]}>
            <h2>Try to fill out the form. </h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className={styles["form-group"]}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter your name"
                        {...register("name", {
                            required: `Field "Name" is required`,
                            minLength: { value: 2, message: `Field "Name" must be at least 2 characters long` }
                        })} />
                    <p className={styles["error"]}>{errors.name?.message}</p>
                </div>

                <div className={styles["form-group"]}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email"
                        {...register("email", {
                            required: `Field "Email" is required`,
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email format",
                            },
                        })} />
                    <p className={styles["error"]}>{errors.email?.message}</p>
                </div>

                <div className={styles["form-group"]}>
                    <label htmlFor="message">Any thoughts</label>
                    <textarea id="message" rows="4" placeholder="You can try to write something"
                        style={{ resize: "none" }}
                        {...register("message", {
                            required: `Field "Message" is required`,
                            minLength: { value: 10, message: "At least 10 characters" },
                        })} />
                    <p className={styles["error"]}>{errors.message?.message}</p>
                </div>

                <button type="submit" className={styles["button-submit"]}>Send</button>
            </form>
        </div>
    );
}

export default Form;