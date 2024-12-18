import Counter from "../Counter/Counter";


const ChildOne = () => {

    return (
        <div className='w-2/3 mx-auto rounded-md p-6 my-3 border-2 border-yellow-400'>
            <h2 className="text-yellow-400">This is Children one</h2>
            <Counter/>
        </div>
    );
};

export default ChildOne;