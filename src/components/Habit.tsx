interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps){
    return (
        <div className="bg-black w-10 h-10 text-white rounded m-2 text-center flex justify-center items-center">
            {props.completed}
        </div>
    )
}