export default function Form(props) {

    const { children } = props

    console.log ('name', 'color')

    return (
        <form className='grid gap-4 text-black'>

            {children}
            
        </form>

    )

}