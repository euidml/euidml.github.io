import "./Experience.css";

function ExperieceCard({name, description}){
    return(
        <div className="experience_card">
            <div className="company_name">
                {name}
            </div>
            <p>
                {description}
            </p>
        </div>
    );
}

function Experiece(){
    const workExperience = [
        {
            "name": "Tree House Toys",
            "description": "Customer Service Representitive, 2023"
        },
        {
            "name": "Best Buy",
            "description": "Product Process Specialist, 2022"
        },
        {
            "name": "Starbucks",
            "description": "Barista, 2022"
        },
        {
            "name": "Best Buy",
            "description": "Product Process Specialist, 2021"
        },
    ]
    const education = [
        {
            "name": "Simon Fraser University",
            "description": "2nd year BSc in Computing Science, In Progress"
        },
        {
            "name": "Langara College",
            "description": "Associate Degree of Science in Computer Science"
        },
    ]
    return(
        <>
            <div id="experience">
                <div id="work_experience">
                    <h1>
                        Work Experiece🗒️
                    </h1>
                    {
                        workExperience.map((obj) => (
                            <ExperieceCard
                                key={obj["name"]}
                                name={obj["name"]}
                                description={obj["description"]}
                            />
                        ))
                    }
                </div>
                <div id="education">
                    <h1>
                        Education📚
                    </h1>
                    {
                        education.map((obj) => (
                            <ExperieceCard
                                key={obj["name"]}
                                name={obj["name"]}
                                description={obj["description"]}
                            />
                        ))
                    }
                </div>

            </div>
        </>
    );
}

export default Experiece;