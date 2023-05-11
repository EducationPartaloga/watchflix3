import Form from "../Components/form";
import FormField from "../Components/formfield"


export default function Contact() {
    return (
        <div className='max-w-screen-2xl mx-auto flex flex-col justify-center items-center p-10 gap-10'>
            <h1 className="flex justify-center items-center">форма отправки данных</h1>
            <Form>
                <FormField type='text' id='firstName' name='firstName' label='Your name'/>
                <FormField type='e-mail' id='e-mail' name='e-mail' label='e-mail'/>
                <FormField type='password'id='password' name='password' label='Password'/>
                <FormField type='checkbox'id='access' name='access' label='Agreement'/>
                <FormField type='hidden'/>
            </Form>
        </div>

    )
}