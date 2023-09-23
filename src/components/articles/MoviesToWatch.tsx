import React from 'react'
import SearchEngineOptimize from '../utils/SearchEngineOptimize';
import SectionHeading from '../utils/SectionHeading';
import Header from '../Header';
import SmallerHeading from '../utils/SmallerHeading';
import Divider from '../utils/Divider';
import basketballBG from '/src/assets/img/movie-bg.jpg';
import PostImage from '../utils/PostImage';
import { 
    americanGangster, 
    bloodDiamond, 
    blueStreak, 
    friday, 
    gladiator, 
    heatMovie, 
    life, 
    rushHour, 
    scarface, 
    theBookOfEli, 
    theDeparted, 
    theGodfather, 
    theWolfOfWallStreet, 
    trainingDay } from '../utils/ImageImporter';

interface MoviesToWatchProps {
    // Add any props you might need
}

const MoviesToWatch = ({ }: MoviesToWatchProps): JSX.Element => {

    return (
        <>
            <Header 
                heading="What to Watch"
                backgroundImage={basketballBG}
                subHeading="14 Must-See Movies for Every Cinema Enthusiast"
            />
            <SearchEngineOptimize
                title="Ultimate Movie Guide: 14 Must-Watch Films"
                description="Discover the world of cinema with our ultimate guide to 14 must-watch films from various genres.
                    From crime thrillers like 'The Departed' to comedies like 'Friday',
                    this comprehensive guide provides a synopsis of each film,
                    helping you decide what to watch next. Dive deep into the narratives,
                    themes, and iconic performances that make these movies a must-see for every cinema enthusiast."
                name="14 Must-Watch Films: The Ultimate Guide"
                type="article"
            />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <SectionHeading heading="What to Watch"/>
                            <p>
                                Feeling the boredom blues and not sure what to watch? Our 'What to Watch?' guide is here to rescue you!
                                We've curated a list of 14 must-watch films from a variety of genres that will captivate your imagination and banish boredom.
                                Whether you're in the mood for a gripping crime thriller, a heartwarming comedy, or an epic historical drama, our guide has something for everyone.
                                So grab your popcorn, get comfortable, and let's embark on a cinematic journey that will entertain, inspire, and lift your spirits!"
                            </p>
                            <Divider />

                            <SmallerHeading heading="1. Training Day "/>
                            <PostImage image_path={trainingDay} />
                            <p>
                                "Training Day" is a crime thriller film that follows the life of a rookie cop, Jake Hoyt, who is assigned to work with a seasoned, but morally ambiguous detective, Alonzo Harris, for a 24-hour period in the gang-ridden neighborhoods of Los Angeles. As the day progresses, Hoyt is faced with ethical dilemmas that challenge his values and ultimately lead him to question the integrity of his mentor.
                            </p>
                            <SmallerHeading heading="2. Gladiator"/>
                            <PostImage image_path={gladiator} />
                            <p>
                                "Gladiator" is an epic historical drama film that revolves around the life of a loyal Roman general, Maximus Decimus Meridius, who is betrayed by the corrupt prince Commodus who murders his own father, the Emperor, to seize the throne. Stripped of his rank and family, Maximus is forced into slavery and becomes a gladiator. He seeks vengeance against Commodus, fighting his way back to Rome to confront him and ultimately restore honor to the Roman Empire.
                            </p>
                            <SmallerHeading heading="3. The Book of Eli"/>
                            <PostImage image_path={theBookOfEli} />
                            <p>
                            "The Book of Eli" is a post-apocalyptic action film that follows the journey of Eli, a lone wanderer, who carries a sacred book across a wasteland ravaged by war and nuclear fallout. The book, believed to hold the secret to saving humanity, is sought after by a power-hungry warlord, Carnegie, who wants to use it for control. As Eli travels westward, he faces numerous challenges, ultimately leading to a showdown with Carnegie and a revelation about the true nature of the book and Eli's purpose.
                            </p>

                            <SmallerHeading heading="4. American Gangster"/>
                            <PostImage image_path={americanGangster} />
                            <p>
                            "American Gangster" is a biographical crime film that follows the life of Frank Lucas, a heroin dealer in Harlem during the 1970s. Lucas buys heroin directly from the source in Southeast Asia and smuggles it into the United States in the coffins of soldiers killed in the Vietnam War. This allows him to sell a purer product at a lower price than his competitors. Richie Roberts, an honest cop, is assigned to bring down Lucas' drug empire. The film explores themes of corruption, family, and the struggle for power in the criminal underworld.
                            </p>

                            <SmallerHeading heading="5. The Departed"/>
                            <PostImage image_path={theDeparted} />
                            <p>
                            "The Departed" is a crime thriller film that centers around two undercover moles; one, Billy Costigan, is a cop who infiltrates a mob syndicate, and the other, Colin Sullivan, is a criminal who infiltrates the police force. Both are unaware of each other's existence and are under pressure to discover the identity of the mole in their respective organizations. As they get deeper into their undercover lives, loyalties are tested, and both men find themselves in increasingly dangerous situations, leading to a tense and unpredictable climax.
                            </p>

                            <SmallerHeading heading="6. Blood Diamond"/>
                            <PostImage image_path={bloodDiamond} />
                            <p>
                            "Blood Diamond" is a political war thriller film that revolves around a fisherman, Solomon Vandy, and a smuggler, Danny Archer, in Sierra Leone during the 1999 civil war. Vandy discovers a rare pink diamond and hides it with the hope of using it to reunite with his family in the future. Archer learns about the diamond and offers to help Vandy find his family in exchange for the diamond. Together, they embark on a perilous journey through rebel territory to retrieve the diamond, exposing the dark world of conflict diamonds and the human cost of civil war.
                            </p>

                            <SmallerHeading heading="7. The Wolf of Wall Street"/>
                            <PostImage image_path={theWolfOfWallStreet} />
                            <p>
                            "The Wolf of Wall Street" is a biographical black comedy film that chronicles the rise and fall of Jordan Belfort, a stockbroker in New York City. Belfort builds a fortune by defrauding wealthy investors out of millions with the help of his loyal inner circle. His excessive lifestyle of wild parties, drugs, and extramarital affairs spirals out of control, leading to his downfall. As Belfort's world begins to crumble, he is forced to make a decision that will affect the lives of everyone around him. The film explores themes of greed, excess, and the moral decay of Wall Street.
                            </p>

                            <SmallerHeading heading="8. Blue Streak "/>
                            <PostImage image_path={blueStreak} />
                            <p>
                            "Blue Streak" is a buddy cop comedy film that centers around Miles Logan, a former jewel thief who, after being released from prison, poses as a detective to retrieve a diamond he hid at a construction site, which is now a police station. Partnered with an unwitting cop, Carlson, Logan uses his criminal expertise to solve cases while secretly searching for the diamond. As he gets deeper into his charade, he faces a series of comical situations and ultimately has to choose between his old life of crime and a new start as a hero.
                            </p>

                            <SmallerHeading heading="9. Heat"/>
                            <PostImage image_path={heatMovie} />
                            <p>
                            "Heat" is a crime drama film that centers around a group of professional bank robbers, led by master thief Neil McCauley, and a dedicated team of detectives in the Los Angeles Police Department, led by Lieutenant Vincent Hanna. As McCauley and his crew plan and execute a series of daring heists, Hanna and his team are always one step behind, leading to a cat-and-mouse game between the two skilled tacticians. The film explores themes of obsession, loneliness, and the duality between the personal lives and professional dedication of the main characters.
                            </p>

                            <SmallerHeading heading="10. Scarface"/>
                            <PostImage image_path={scarface} />
                            <p>
                            "Scarface" is a crime drama film that follows the rise and fall of Tony Montana, a Cuban immigrant who arrives in Miami with nothing and rises to become a powerful drug lord. Ambitious and ruthless, Montana takes over the cocaine trade in Miami by eliminating rivals and establishing connections with drug cartels. However, his insatiable greed, paranoia, and addiction to cocaine lead to his downfall as he alienates those closest to him and makes powerful enemies. The film explores themes of ambition, power, and the destructive nature of greed.
                            </p>

                            <SmallerHeading heading="11. The Godfather"/>
                            <PostImage image_path={theGodfather} />
                            <p>
                            "The Godfather" is a crime drama film that centers around the powerful Italian-American crime family of Don Vito Corleone. When the patriarch of the family, Vito Corleone, is shot and wounded by a rival family, his youngest son, Michael, who is initially reluctant to get involved in the family's criminal activities, gradually becomes more immersed in the family's affairs. Michael takes over as the new Don and seeks to avenge his father and consolidate power. The film explores themes of power, family, and the moral dilemma between loyalty and criminality.
                            </p>

                            <SmallerHeading heading="12. Life"/>
                            <PostImage image_path={life} />
                            <p>
                            I apologize for the confusion, but "Life" is actually a comedy-drama film starring Eddie Murphy and Martin Lawrence. It follows the story of two men, Ray Gibson (Eddie Murphy) and Claude Banks (Martin Lawrence), who are wrongfully convicted of murder and sentenced to life in prison. The film chronicles their struggles, friendship, and attempts to prove their innocence over the course of 65 years. Despite the harshness of their situation, the film is lighthearted and humorous, focusing on the strong bond that develops between the two men as they support each other through the years.
                            </p>

                            <SmallerHeading heading="13. Friday"/>
                            <PostImage image_path={friday} />
                            <p>
                            "Friday" is a stoner comedy film that follows a day in the life of Craig Jones (Ice Cube) and Smokey (Chris Tucker), two friends who hang out on their porch on a Friday afternoon. Craig has just lost his job, and Smokey, who sells marijuana, is in trouble with his supplier for smoking rather than selling his product. The film follows the misadventures of the two friends as they navigate their way through the day, dealing with neighborhood bullies, romantic interests, and a cast of eccentric characters. Ultimately, Craig must stand up to the neighborhood bully and make important decisions about his future.
                            </p>

                            <SmallerHeading heading="14. Rush Hour"/>
                            <PostImage image_path={rushHour} />
                            <p>
                            "Rush Hour" is an action comedy film that follows the unlikely pairing of a laid-back Los Angeles detective, James Carter (Chris Tucker), and a disciplined Hong Kong detective, Lee (Jackie Chan), who are forced to work together to solve the kidnapping of the Chinese consul's daughter. Despite their differences in personality and approach, Carter and Lee gradually develop a bond and learn to work together to take down the international criminal mastermind behind the kidnapping. The film combines high-octane action sequences with comedic moments, showcasing the contrasting styles of its two leads.
                            </p>
                            <p>More info: <a href="https://www.imdb.com/">IMDb</a></p>


                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default MoviesToWatch;
