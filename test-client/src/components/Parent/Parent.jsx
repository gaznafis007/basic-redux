import ChildOne from "../ChildOne/ChildOne";
import ChildTwo from "../ChlidTwo/ChildTwo";

const Parent = () => {
    return (
        <div className='w-2/3 mx-auto rounded-md p-12 my-3 border-2 border-violet-600'>
            <h2 className="text-violet-600">This is parent</h2>
            <ChildOne />
            <ChildTwo />
        </div>
    );
};

export default Parent;