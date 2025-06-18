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
    return(
        <>
            <div id="experience">
                <div id="work_experience">
                    <h1>
                        Work Experiece🗒️
                    </h1>
                
                    <ExperieceCard
                        key="Tree House Toys"
                        name="Tree House Toys"
                        description="Customer Service Representitive, 2023"
                    />
                    <ExperieceCard
                        key="Tree House Toys"
                        name="Tree House Toys"
                        description="Customer Service Representitive, 2023"
                    />
                </div>
                <div id="education">
                    <h1>
                        Education📚
                    </h1>
                    <ExperieceCard
                        key="Simon Fraser University"
                        name="Simon Fraser University"
                        description="2nd year BSc in Computing Science, In Progress"
                    />
                    <ExperieceCard
                        key="Simon Fraser University"
                        name="Simon Fraser University"
                        description="2nd year BSc in Computing Science, In Progress"
                    />
                </div>

            </div>
        </>
    );
}

export default Experiece;