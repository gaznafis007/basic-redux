import Counter from "../Counter/Counter";

const ChildTwo = () => {
    return (
        <div className='w-2/3 mx-auto rounded-md p-6 my-3 border-2 border-rose-600'>
            <h2 className="text-rose-600">This is Children two</h2>
            <Counter />
        </div>
    );
};

export default ChildTwo;