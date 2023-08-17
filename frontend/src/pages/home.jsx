import '../assets/styles/home.css'
import user from '../assets/avatars/AvatarMaker.png';
const Home = () => {
    return (
        <>
            <p>Home </p>
            <div className="home container">
                <div className="quick--actions">
                    <h1>Quick Actions</h1>
                    <div className="actions">
                        <div className="action">
                            <div className="image--container">
                                <img src={user} alt='user' />
                            </div>
                            <p>Add Users</p>
                        </div>
                        <div className="action">
                            <div className="image--container">

                            </div>
                            <p>Add Admins</p>
                        </div>
                        <div className="action">
                            <div className="image--container">

                            </div>
                            <p>Send an update</p>
                        </div>
                        <div className="action">
                            <div className="image--container">

                            </div>
                            <p>Add Task</p>
                        </div>
                        <div className="action">
                            <div className="image--container">

                            </div>
                            <p>Go to Chats</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;