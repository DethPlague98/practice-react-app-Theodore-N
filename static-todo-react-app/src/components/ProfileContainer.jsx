import ProfileCard from "./ProfileCard";

function ProfileContainer() {
    const profiles=[
        {
            name: "Theo N.",
            age: 28,
            bio:  "Likes to write code.",
        },
        {
            name: "Amanda Z.",
            age: 85,
            bio:  "Does not like to write code.",
        },
        {
            name: "KeShawn O.",
            age: 1256,
            bio:  "Likes to think he isn't a vampire.",
        },
    ];

    return (
        <div className="profile-container">
            <h1>User Profiles</h1>

            <div className="profile-table">
                {profiles.map((profile, index) => (
                    <ProfileCard
                        key={index}
                        name={profile.name}
                        age={profile.age}
                        bio={profile.bio}/>
                ))

                }
            </div>
        </div>
    )
}

export default ProfileContainer;