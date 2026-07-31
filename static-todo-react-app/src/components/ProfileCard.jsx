function ProfileCard({name,age,bio}){
    return (
        <div className="profile-card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>{bio}</p>
        </div>
    )
}

export default ProfileCard;