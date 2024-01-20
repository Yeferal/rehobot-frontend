import { RiArrowDownSFill, RiArrowRightSFill, RiArrowUpSFill } from "react-icons/ri";


export default function InputExample() {
  return (
    <div className="row align-items-stretch">
        <div className="col-lg-12">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Form&apos;s Example &apos; &lsquo; &#39; &rsquo;</h6>
                </div>
                <div className="card-body">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Input Fields</h6>
                        </div>
                        <div className="card-body">
                            <div className="input-group">
                                <div className="textfield">
                                    <input type="text" className="input-text" value={'Hello World'} placeholder="Required"/>
                                    <label className="input-label">
                                        <span>Required</span> 
                                        <span>*</span>
                                    </label>
                                </div>

                                <div className="textfield">
                                    <input type="text" className="input-text" value={'Hello World'} disabled placeholder="Disabled"/>
                                    <label className="input-label">
                                        <span>Disabled</span>
                                    </label> 
                                </div>

                                <div className="textfield">
                                    <input type="password" className="input-password" placeholder="Password"/>
                                    <label className="input-label">
                                        <span>Password</span>
                                    </label>
                                </div>

                                <div className="textfield">
                                    <input type="text" className="input-text" value={'Hello World'} readOnly placeholder="Read Only"/>
                                    <label className="input-label">
                                        <span>Read Only</span>
                                    </label>
                                </div>

                                <div className="textfield">
                                    <input type="number" className="input-number" placeholder="Number"/>
                                    <label className="input-label">
                                        <span>Number</span>
                                    </label>
                                </div>

                                <div className="textfield">
                                    <input type="search" className="input-search" placeholder="Search field"/>
                                    <label className="input-label">
                                        <span>Search field</span>
                                    </label>
                                </div>

                                <div className="textfield">
                                    <input type="text" className="input-text" value={'Default Value'} placeholder="Helper text"/>
                                    <label className="input-label">
                                        <span>Helper text</span>
                                    </label>
                                    <div className="legend">
                                        <p className="helper-text helper-text-visible">Some importante text</p>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="input-group">
                                <div className="textfield textfield-filled">
                                    <input type="text" className="input-text" value={'Hello World'} placeholder="Required"/>
                                    <label className="input-label">
                                        <span>Required</span> 
                                        <span>*</span>
                                    </label>
                                </div>

                                <div className="textfield textfield-filled">
                                    <input type="text" className="input-text" value={'Hello World'} disabled placeholder="Disabled"/>
                                    <label className="input-label">
                                        <span>Disabled</span>
                                    </label> 
                                </div>

                                <div className="textfield textfield-filled">
                                    <input type="password" className="input-password" placeholder="Password"/>
                                    <label className="input-label">
                                        <span>Password</span>
                                    </label>
                                </div>

                                <div className="textfield textfield-filled">
                                    <input type="text" className="input-text" value={'Hello World'} readOnly placeholder="Read Only"/>
                                    <label className="input-label">
                                        <span>Read Only</span>
                                    </label>
                                </div>

                                <div className="textfield textfield-filled">
                                    <input type="number" className="input-number" placeholder="Number"/>
                                    <label className="input-label">
                                        <span>Number</span>
                                    </label>
                                </div>

                                <div className="textfield textfield-filled">
                                    <input type="search" className="input-search" placeholder="Search field"/>
                                    <label className="input-label">
                                        <span>Search field</span>
                                    </label>
                                </div>

                                <div className="textfield textfield-filled">
                                    <input type="text" className="input-text" value={'Default Value'} placeholder="Helper text"/>
                                    <label className="input-label">
                                        <span>Helper text</span>
                                    </label>
                                    <div className="legend">
                                        <p className="helper-text helper-text-visible">Some importante text</p>
                                    </div>
                                </div>
                            </div>

                            
                            <hr />

                            <div className="input-group">
                                <div className="textfield textfield-standard">
                                    <input type="text" className="input-text" value={'Hello World'} placeholder="Required"/>
                                    <label className="input-label">
                                        <span>Required</span> 
                                        <span>*</span>
                                    </label>
                                </div>

                                <div className="textfield textfield-standard">
                                    <input type="text" className="input-text" value={'Hello World'} disabled placeholder="Disabled"/>
                                    <label className="input-label">
                                        <span>Disabled</span>
                                    </label> 
                                </div>

                                <div className="textfield textfield-standard">
                                    <input type="password" className="input-password" placeholder="Password"/>
                                    <label className="input-label">
                                        <span>Password</span>
                                    </label>
                                </div>

                                <div className="textfield textfield-standard">
                                    <input type="text" className="input-text" value={'Hello World'} readOnly placeholder="Read Only"/>
                                    <label className="input-label">
                                        <span>Read Only</span>
                                    </label>
                                </div>

                                <div className="textfield textfield-standard">
                                    <input type="number" className="input-number" placeholder="Number"/>
                                    <label className="input-label">
                                        <span>Number</span>
                                    </label>
                                </div>

                                <div className="textfield textfield-standard">
                                    <input type="search" className="input-search" placeholder="Search field"/>
                                    <label className="input-label">
                                        <span>Search field</span>
                                    </label>
                                </div>

                                <div className="textfield textfield-standard">
                                    <input type="text" className="input-text" value={'Default Value'} placeholder="Helper text"/>
                                    <label className="input-label">
                                        <span>Helper text</span>
                                    </label>
                                    <div className="legend">
                                        <p className="helper-text helper-text-visible">Some importante text</p>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Select Inputs</h6>
                        </div>
                        <div className="card-body row">
                            {/* <div className="textfield">
                                <input list="items" className="input-select" placeholder="Helper text"/>
                                <RiArrowDownSFill className="input-icon-select"/>
                                <datalist id="items" className="select-list">
                                    <option value={'1'}>Op 1</option>
                                    <option value={'1'}>Op 2</option>
                                    <option value={'1'}>Op 3</option>
                                    <option value={'1'}>Op 4</option>
                                </datalist>
                                
                                <label className="input-label">
                                    <span>Select</span>
                                </label>
                                <div className="legend">
                                    <p className="helper-text helper-text-visible">Some importante text</p>
                                </div>
                            </div> */}

                            <div className="textfield">
                                <select className="select-list">
                                    <option value={'1'}>Op 1</option>
                                    <option value={'1'}>Op 2</option>
                                    <option value={'1'}>Op 3</option>
                                    <option value={'1'}>Op 4</option>
                                </select>
                                <RiArrowDownSFill className="select-icon"/>
                                <label className="input-label">
                                    <span>Select</span>
                                </label>
                                <div className="legend">
                                    <p className="helper-text helper-text-visible">Some importante text</p>
                                </div>
                            </div>

                            <div className="textfield textfield-filled">
                                <select className="select-list">
                                    <option value={'1'}>Op 1</option>
                                    <option value={'1'}>Op 2</option>
                                    <option value={'1'}>Op 3</option>
                                    <option value={'1'}>Op 4</option>
                                </select>
                                <RiArrowDownSFill className="select-icon"/>
                                <label className="input-label">
                                    <span>Select</span>
                                </label>
                                <div className="legend">
                                    <p className="helper-text helper-text-visible">Some importante text</p>
                                </div>
                            </div>

                            <div className="textfield textfield-standard">
                                <select className="select-list">
                                    <option value={'1'}>Op 1</option>
                                    <option value={'1'}>Op 2</option>
                                    <option value={'1'}>Op 3</option>
                                    <option value={'1'}>Op 4</option>
                                </select>
                                <RiArrowDownSFill className="select-icon"/>
                                <label className="input-label">
                                    <span>Select</span>
                                </label>
                                <div className="legend">
                                    <p className="helper-text helper-text-visible">Some importante text</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Switches</h6>
                        </div>
                        <div className="card-body row">
                            <div className="textfield">
                                <input type="checkbox" className="input-switch"/>
                            </div>
                            
                            <div className="textfield">
                                <input type="checkbox" className="input-switch"/>
                            </div>

                            <div className="textfield">
                                <input type="checkbox" className="input-switch"/>
                            </div>

                            <div className="textfield">
                                <input type="checkbox" className="input-switch"/>
                            </div>

                        </div>
                    </div>

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Checkboxes & Radios</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="textfield">
                                    <input type="checkbox" className="input-checkbox"/>
                                </div>

                                <div className="textfield">
                                    <input type="checkbox" className="input-checkbox checkbox-primary"/>
                                </div>

                                <div className="textfield">
                                    <input type="checkbox" className="input-checkbox checkbox-info"/>
                                </div>

                                <div className="textfield">
                                    <input type="checkbox" className="input-checkbox checkbox-success"/>
                                </div>

                                <div className="textfield">
                                    <input type="checkbox" className="input-checkbox checkbox-warning"/>
                                </div>

                                <div className="textfield">
                                    <input type="checkbox" className="input-checkbox checkbox-danger"/>
                                </div>

                                <div className="textfield">
                                    <input type="checkbox" className="input-checkbox checkbox-light"/>
                                </div>

                                <div className="textfield">
                                    <input type="checkbox" className="input-checkbox checkbox-secondary"/>
                                </div>
                            </div>

                            <hr />

                            <div className="row">
                                <div className="textfield">
                                    <input type="radio" className="input-radio"/>
                                    <label className="input-label-radio">
                                        <span>Female</span>
                                    </label>
                                </div>

                                <div className="textfield">
                                    <input type="radio" className="input-radio"/>
                                    <label className="input-label-radio">
                                        <span>Male</span>
                                    </label>
                                </div>

                                <div className="textfield">
                                    <input type="radio" className="input-radio"/>
                                    <label className="input-label-radio">
                                        <span>Other</span>
                                    </label>
                                </div>

                                <div className="textfield">
                                    <input type="radio" className="input-radio" disabled/>
                                    <label className="input-label-radio">
                                        <span>Other</span>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Sliders</h6>
                        </div>
                        <div className="card-body">
                            

                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    </div>
  )
}
