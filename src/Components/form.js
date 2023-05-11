export default function Form(props) {

    const { children, buttonText } = props

    const handlerSubmit = () => {
        alert('form sended')
    }

    return (
        <form className='grid gap-4 text-black' onSubmit={handlerSubmit}>

            {children}
            <button className='bg-yellow-300 rounded-md p-4' type='submit'>{buttonText}</button>
            
        </form>

    )

}