import {workExperience, education} from "../Data"
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
                    {
                        workExperience.map((obj) => (
                            <ExperieceCard
                                key={obj[Object.keys(obj)[0]]}
                                name={obj[Object.keys(obj)[0]]}
                                description={obj[Object.keys(obj)[1]]}
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
                                key={obj[Object.keys(obj)[0]]}
                                name={obj[Object.keys(obj)[0]]}
                                description={obj[Object.keys(obj)[1]]}
                            />
                        ))
                    }
                </div>

            </div>
        </>
    );
}

export default Experiece;