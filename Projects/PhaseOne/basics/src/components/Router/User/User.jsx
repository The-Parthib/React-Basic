import { useParams } from "react-router"

const User = () => {
    const {id} = useParams();
return (
    <div className="text-center p-4 bg-gray-200 rounded-md shadow-md text-lg font-semibold text-blue-600">
        User : {id}
    </div>
)
}

export default User 