import Accordion from "../Components/Accordion";

import Img_20 from "../Imgs/Img_0.png";
import Img_1 from "../Imgs/Img_1.png";
import Img_2 from "../Imgs/Img_2.png";
import Img_3 from "../Imgs/Img_3.png";
import Img_4 from "../Imgs/Img_4.png";
import Img_5 from "../Imgs/Img_5.png";
import Img_6 from "../Imgs/Img_6.png";
import Img_7 from "../Imgs/Img_7.png";
import Img_8 from "../Imgs/Img_8.png";
import Img_9 from "../Imgs/Img_9.png";
import Img_10 from "../Imgs/Img_10.png";
import Img_11 from "../Imgs/Img_11.png";
import Img_12 from "../Imgs/Img_12.png";
import Img_13 from "../Imgs/Img_13.png";
import Img_14 from "../Imgs/Img_14.png";
import Img_15 from "../Imgs/Img_15.png";
import Img_16 from "../Imgs/Img_16.png";
import ImgCarousel from "../Components/Carousels";



function ComponentsPage() {
    return (<>
        <div className="sections">


            <div className="accordion-section">
                <div className="content">
                    <h1>Accordion</h1>
                    <Accordion contents={[
                        { header: "Ahoj", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!" },
                        { header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!" },
                    ]}
                        oneOpened={true}
                    />
                </div>


            </div>

            <div className="accordion-section-v2">
                <div className="content">

                    <div className="accordion-plain">
                        <div className="accordion-item">
                            <button className="accordion-header"
                                onTouch={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                                onClick={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                            >
                                Ahoooooj
                            </button>

                            {/* <div dangerouslySetInnerHTML={{ __html: item.content }} class="accordion-content" ></div> */}
                            <div className="accordion-content">
                                <p>XdxdXdddd</p>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

            <div className="butttons-section">

                <div className="content">

                    <h1>Buttons</h1>
                    <div className="padding flex">
                        <button className="primary">Hello Word</button>
                        <button className="secondary">Lorem ipsum</button>
                        <button className="terciary">Lorem ipsum</button>
                        <button className="plain">Lorem ipsum</button>
                    </div>
                    <div className="padding flex">
                        <button className="primary"> <span className="g-icon">arrow_forward</span> Hello Word</button>
                        <button className="secondary"><span className="g-icon">arrow_forward</span>Lorem ipsum</button>
                        <button className="terciary">Lorem ipsum</button>
                        <button className="plain">Lorem ipsum</button>
                    </div>
                    <div className="padding flex">
                        <button className="primary "> Hello Word  <span className="g-icon">arrow_forward</span></button>
                        <button className="secondary">Lorem ipsum  <span className="g-icon">arrow_forward</span></button>
                        <button className="terciary">Lorem ipsum  <span className="g-icon">arrow_forward</span></button>
                        <button className="plain">Lorem ipsum  <span className="g-icon">arrow_forward</span></button>
                    </div>

                    <div className="padding flex">
                        <button className="large primary">Hello Word</button>
                        <button className="large secondary">Lorem ipsum</button>
                        <button className="large terciary">Lorem ipsum</button>
                        <button className="large plain">Lorem ipsum</button>
                    </div>
                </div>
            </div>

            <div className="cards-section">
                <div className="content">
                    <h1>Cards</h1>

                    <div className="card">
                        <h4>Default card</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores autem tempore dolorum nam voluptate a fuga excepturi esse. Ipsum possimus fuga quam esse, quia quae commodi molestias. Obcaecati, quae tempora?</p>
                    </div>
                    <div className="card primary">
                        <h4>Primary card</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus debitis consectetur animi accusantium culpa quae qui dolor, voluptas at omnis tempore odit illum placeat esse. Exercitationem laudantium facere at facilis.   </p>
                    </div>
                    <div className="card secondary">
                        <h4>Secondary card</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptas, exercitationem, dolorum doloribus ullam veniam quis quos ipsa corrupti impedit nulla, fugit sit maxime quod! Dolores in modi voluptate cupiditate.</p>
                    </div>

                    <div className="card terciary">
                        <h4>Terciary card</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nesciunt, magnam tempora blanditiis, architecto incidunt neque vel earum distinctio animi suscipit laborum fugiat facilis placeat iure voluptatem culpa inventore at.</p>
                    </div>
                </div>
            </div>


            <div className="carousel-section ">

                <div className="content h-200px" style="margin-bottom:7px">

                    <ImgCarousel />
                </div>



            </div>


            <div className="dropdown-sections">
                <div className="content">
                    <h1>Dropdown</h1>

                    {/* Select */}
                    <div className="select">
                        <select class="primary">
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Dacia</option>
                            <option value="5">Fiat</option>
                            <option value="6">Golf</option>
                            <option value="7">Honda</option>
                            <option value="8">Isuzu</option>
                            <option value="9">Jaguar</option>
                            <option value="10">Kia</option>
                        </select>
                        <select class="secondary">
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Dacia</option>
                            <option value="5">Fiat</option>
                            <option value="6">Golf</option>
                            <option value="7">Honda</option>
                            <option value="8">Isuzu</option>
                            <option value="9">Jaguar</option>
                            <option value="10">Kia</option>
                        </select>
                        <select class="terciary">
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Dacia</option>
                            <option value="5">Fiat</option>
                            <option value="6">Golf</option>
                            <option value="7">Honda</option>
                            <option value="8">Isuzu</option>
                            <option value="9">Jaguar</option>
                            <option value="10">Kia</option>
                        </select>


                        {/* Button dropdown */}
                        <div className="dropdown">
                            <button className="primary">Dropdown</button>
                            <div className="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="input-section padding-large">
                <div className="content">
                    <h1>Inputs</h1>

                    <div className="">
                        <div className="inpputs">
                            <input type="text" name="Hello" placeholder="username@mail.com" />
                            <input type="text" class="large" name="Hello" placeholder="username@mail.com" />
                        </div>
                        {/* Checkboxes */}
                        <div className="checkboxes">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1"> I have a bike</label><br />
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                            <label for="vehicle2"> I have a car</label><br />
                        </div>
                        {/* Radios */}
                        <div className="radios">
                            <input type="radio" id="vehicle3" name="vehicle" value="Bike" />
                            <label for="vehicle3"> I have a bike</label><br />
                            <input type="radio" id="vehicle4" name="vehicle" value="Car" />
                            <label for="vehicle4"> I have a car</label><br />


                        </div>





                    </div>

                </div>
            </div>

            <div className="tiles-section">
                <div className="content">
                    <h1>Tiles</h1>

                    <div className="center row" >
                        <div className="tile primary w-3 ">
                            <h3>Primary tile</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla omnis placeat totam impedit animi, natus officia quibusdam iure dolore, voluptates earum iste, id blanditiis praesentium quia suscipit voluptatum corrupti pariatur.</p>
                        </div>
                        <div className="tile secondary w-3">
                            <h3>Sec tile</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, qui sunt eum aperiam ducimus explicabo molestias quod voluptatum eveniet veniam rerum, facilis quas incidunt dolorum ullam harum distinctio consequuntur ab.
                            </p>
                        </div>
                        <div className="tile terciary  w-3">
                            <h3>Ter tile</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio beatae explicabo aliquam autem deserunt itaque voluptatum? Commodi eius dignissimos id corrupti. Rem reprehenderit laudantium quia cum magnam eveniet perferendis.</p>
                        </div>
                    </div>


                </div>
            </div>


            <div className="tables-section">
                <div className="content">
                    <h1>Tables</h1>

                    <table class="primary">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bořek</td>
                                <td>Stavitel</td>
                                <td>24</td>
                            </tr>
                            <tr>
                                <td>Julča</td>
                                <td>Míchačka</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td>Štěpán</td>
                                <td>Štěpán</td>
                                <td>18</td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="secondary">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bořek</td>
                                <td>Stavitel</td>
                                <td>24</td>
                            </tr>
                            <tr>
                                <td>Julča</td>
                                <td>Míchačka</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td>Štěpán</td>
                                <td>Štěpán</td>
                                <td>18</td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="terciary" >
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bořek</td>
                                <td>Stavitel</td>
                                <td>24</td>
                            </tr>
                            <tr>
                                <td>Julča</td>
                                <td>Míchačka</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td>Štěpán</td>
                                <td>Štěpán</td>
                                <td>18</td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="plain" >
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bořek</td>
                                <td>Stavitel</td>
                                <td>24</td>
                            </tr>
                            <tr>
                                <td>Julča</td>
                                <td>Míchačka</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td>Štěpán</td>
                                <td>Štěpán</td>
                                <td>18</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>


            <div className="leader-section">
                <div className="content">
                    <h1>Leaders</h1>

                    <p class="row">Default <span className="leader"></span> span.leader</p>
                    <p class="row">Dashed <span className="leader dashed"></span> span.leader.dashed</p>
                    <p class="row">Solid <span className="leader solid"></span> span.leader.solid</p>

                </div>
            </div>

            <div className="idk">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestias, provident quas sunt possimus quod soluta totam. Et quisquam tempora soluta voluptatem! Esse, cumque dicta nesciunt at sint ex provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio et quaerat nemo nisi iure amet ipsa debitis accusamus ipsam molestiae, perspiciatis sunt, ducimus repellendus corporis? Sit et asperiores tempore.</p>
                </div>
            </div>
        </div>

    </>);
}

export default ComponentsPage;