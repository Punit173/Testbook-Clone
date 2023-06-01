import React from 'react'
import { Avatar } from '@mui/material'

export default function Feed() {
    return (
        <div className='Feed_Box'>
            <div className="box">
            <div className="Quora_Box">
                {/* Question_Box-Contetn-Start */}
                <div className="Question_Box">
                
                <div className="Login_Post">
                <Avatar className="Avatar"/>
                <div className="Ask_Question">
                    {/* <input type="text" placeholder="What do you want to ask or share?" /> */}
                    <span>What do you want to ask or share?</span>
                </div>
                </div>

                <div className="Post">
                <div className="post">
                    <div className='hover'>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd"><g transform="translate(9 7)"><path d="M3 6v-.5A2.5 2.5 0 1 0 .5 3" stroke-linecap="round" stroke-linejoin="round"></path><circle class="icon_svg-fill_as_stroke" fill="#666" cx="3" cy="8.5" r="1" stroke="none"></circle></g><path d="M7.5 4h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3L9 22v-3H7.5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" stroke-linejoin="round"></path></g></svg>
                    <span>Ask</span>
                    </div>
                </div>
                <div className="post">
                    <div className='hover'>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path><path d="M14.5 19.5h5v-5m-10-10h-5v5" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                    <span>Answer</span>
                    </div>
                </div>
                    <div className="post">
                    <div className='hover'>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9a2 2 0 0 1 2.828 0Z" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path></g></svg>
                    <span>Post</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
                {/* Question_Box-Contetn-End */}

                {/* New_Post-Content-Start */}
            <div className='New_Post_Box'>
                <div className="Login_new_Post">
                    <div className="Name_info">
                    <Avatar className="Avatar"/>
                    <span>Kiran Kumar </span>&#12539;<span id='follow'>Follow</span>
                    </div>
                    <div className='svg'>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.243 7.757-8.486 8.486m8.486 0L7.757 7.757" class="icon_svg-stroke" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke="#666" stroke-width="1.5"></path></svg>
                    </div>
                </div>
                <div className="Time_Date">
                <span>I write distributed code</span>&#12539;<span id='Date'>Updated 5y</span>
                </div>
                <div className="content">
                    <h3>How does a programmer think?</h3>
                    <h4>Last night I was watching NannakuPrematho(a telugu movie).</h4>
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-f381dec8f28bb9d52d4d2c047eaf3c2a-lq" alt="" />
                </div>
                {/* New_Post-Content-Start */}
            </div>
                <div className="Votes_Container">
                    <div className="Votes">
                        <div className="UpVotes">
                            <span><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4 3 15h6v5h6v-5h6z" class="icon_svg-stroke icon_svg-fill" stroke-width="1.5" stroke="#477bff" fill="none" stroke-linejoin="round"></path></svg> Upvotes<pan className='likes'>&#12539;2.3K</pan></span>
                            <span><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" stroke-width="1.5" stroke-linejoin="round"></path></svg></span>
                        </div>
                    </div>
                        <div className='comments'>
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z" class="icon_svg-stroke icon_svg-fill" stroke="#666" stroke-width="1.5" fill="none"></path></svg>21
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M19.748 10a8.003 8.003 0 0 0-15.496.002m.001 4.003a8.003 8.003 0 0 0 15.494 0"></path><path d="m2.5 7.697 1.197 3.289 3.289-1.197m14.5 6.5L20.289 13 17 14.197"></path></g></svg>24
                        </div>

                    <div className="svg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 11.25a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm-7 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm14 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Z" class="icon_svg-stroke" fill="#666" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                </div>

                <div>
                <div className='New_Post_Box'>
                <div className="Login_new_Post">
                    <div className="Name_info">
                    <Avatar className="Avatar"/>
                    <span>Geoffrey Okongo</span>&#12539;<span id='follow'>Follow</span>
                    </div>
                    <div className='svg'>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.243 7.757-8.486 8.486m8.486 0L7.757 7.757" class="icon_svg-stroke" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke="#666" stroke-width="1.5"></path></svg>
                    </div>
                </div>
                <div className="Time_Date">
                <span>7+ years programming my way to success</span>&#12539;<span id='Date'>Updated 5y</span>
                </div>
                <div className="content">
                    <h3>Who are/were some of the most badass computer programmers?</h3>
                    <h4>Are you a badass programmer just because you used the first mainframes?</h4>
                    <p style={{padding:"0px 10px"}}>Do you think so?</p>
                    <p style={{padding:"0px 10px"}}>Well look at these big 8 who killed it…stone dead.</p>
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-8f9e0539379a7ec3593537266d2d7e9f-pjlq" alt="" />
                </div>
                {/* New_Post-Content-Start */}
                </div>
                <div className="Votes_Container">
                    <div className="Votes">
                        <div className="UpVotes">
                            <span><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4 3 15h6v5h6v-5h6z" class="icon_svg-stroke icon_svg-fill" stroke-width="1.5" stroke="#477bff" fill="none" stroke-linejoin="round"></path></svg> Upvotes<pan className='likes'>&#12539;2.3K</pan></span>
                            <span><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" stroke-width="1.5" stroke-linejoin="round"></path></svg></span>
                        </div>
                    </div>
                        <div className='comments'>
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z" class="icon_svg-stroke icon_svg-fill" stroke="#666" stroke-width="1.5" fill="none"></path></svg>21
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M19.748 10a8.003 8.003 0 0 0-15.496.002m.001 4.003a8.003 8.003 0 0 0 15.494 0"></path><path d="m2.5 7.697 1.197 3.289 3.289-1.197m14.5 6.5L20.289 13 17 14.197"></path></g></svg>24
                        </div>

                    <div className="svg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 11.25a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm-7 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm14 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Z" class="icon_svg-stroke" fill="#666" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                </div>
                </div>

                <div>
                <div className='New_Post_Box'>
                <div className="Login_new_Post">
                    <div className="Name_info">
                    <Avatar className="Avatar"/>
                    <span>Jose Alberto</span>&#12539;<span id='follow'>Follow</span>
                    </div>
                    <div className='svg'>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.243 7.757-8.486 8.486m8.486 0L7.757 7.757" class="icon_svg-stroke" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke="#666" stroke-width="1.5"></path></svg>
                    </div>
                </div>
                <div className="Time_Date">
                <span>Ing. Systems from University of GuadalajaraOct 22</span>&#12539;<span id='Date'>Oct 22</span>
                </div>
                <div className="content">
                    <h3>What interesting facts about psychology do you not usually see commented by anyone?</h3>
                    <ul style={{margin:"0px -5px"}}>
                        <li>When someone stares at your mouth during a conversation, they're probably thinking about what it would be like to kiss you.</li>
                        <li>If you meet someone in a dangerous situation, your chances of falling in love increase.</li>
                        <li>Women are influenced and persuaded by a man's sense of humor and sarcasm.</li>
                        <li>If after ending a relationship you still stay in touch, chances are one of you is still in love or never was.</li>
                        <li>Thoughts and ideas don't go away easily because we keep nurturing them every day.</li>
                    </ul>
                    <p style={{padding:"0px 10px"}}>Leave your positive vote if you liked it!</p>
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-0b7207afa6549be96708c8d9edaeb7ea-pjlq" alt="" />
                </div>
                {/* New_Post-Content-Start */}
                </div>
                <div className="Votes_Container">
                    <div className="Votes">
                        <div className="UpVotes">
                            <span><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4 3 15h6v5h6v-5h6z" class="icon_svg-stroke icon_svg-fill" stroke-width="1.5" stroke="#477bff" fill="none" stroke-linejoin="round"></path></svg> Upvotes<pan className='likes'>&#12539;8.8K</pan></span>
                            <span><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" stroke-width="1.5" stroke-linejoin="round"></path></svg></span>
                        </div>
                    </div>
                        <div className='comments'>
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z" class="icon_svg-stroke icon_svg-fill" stroke="#666" stroke-width="1.5" fill="none"></path></svg>82
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M19.748 10a8.003 8.003 0 0 0-15.496.002m.001 4.003a8.003 8.003 0 0 0 15.494 0"></path><path d="m2.5 7.697 1.197 3.289 3.289-1.197m14.5 6.5L20.289 13 17 14.197"></path></g></svg>189
                        </div>

                    <div className="svg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 11.25a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm-7 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm14 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Z" class="icon_svg-stroke" fill="#666" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                </div>

                </div>
                </div>
        </div>
    )
}
