//library imports
import CustomButton from './CustomButton';

const SincereTask = ({task, handleCompleteAction}) =>{
    return (
     <>
     <h1 className='text-3xl sm:text-6xl font-bold text-center'>{task}</h1>
     <CustomButton
        text="Mark Done"
        handleCompleteAction={handleCompleteAction}/>
     </>  
    )
}

export default SincereTask