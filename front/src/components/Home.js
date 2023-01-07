import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Cookies from "js-cookie";



const Home = () => {
  const navigate = useNavigate();
  const [condetails, setcondetails] = useState({
    matchid:"",
    tourid:"",
    gametype:"",
    contestselection:"",
    EntrySP:"",
    EntryEP:"",
    team:"",
    amount:"",
    slot:"",
    noofcontest:"",
    refresh:"",
  });

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setcondetails({
      ...condetails,
      [name] : value,
    })
  }

  const submitHandle = async(e) =>  {
    // e.preventDefault();
    // const {matchid, tourid, gametype, contestselection, EntrySP, EntryEP, team, amount, slot, noofcontest, refresh } = condetails;
    // if ( matchid && tourid && gametype && )
    console.log("hello ji");
    e.preventDefault();
    axios.post('http://localhost:5000/home', condetails)
    .then(res => {
      res
      console.log("hello bhai")
        alert(res.data.status)
        navigate('/Success');
    })
    .catch((err)=>console.log(err))

  }


  return (
    <section className="bg-black">
      <div className="px-6 mx-auto  pt-6">
        <nav className="flex justify-end">
          <a
            href="/login"
            className=" text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-md py-3 px-6"
          >
            LOG OUT
          </a>
        </nav>
        <div className="h-max flex justify-center">
          {/* flex flex-col items-center justify-center px-6 py-8 h-screen */}
          <div>
            <h1 className="text-5xl font-bold text-white">DREAM 11</h1>
          

          <form onSubmit={submitHandle}>
            <div>
              <label
                for="matchid"
                className="block mt-10 mb-2 text-sm font-medium text-white text-center"
                onChange={changeHandler}
              >
                Match ID:
              </label>
              <input
                type="number"
                name="matchid"
                id="matchid"
                value={condetails.matchid}
                 onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>

            <div>
              <label
                for="tourid"
                className="block mt-3 mb-2 text-sm font-medium text-white text-center"
                onChange={changeHandler}
              >
                Tour ID:
              </label>
              <input
                type="number"
                name="tourid"
                id="tourid"
                value={condetails.tourid}
                onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>

            <div>
              <label
                for="gametype"
                className="block mt-3 mb-2 text-sm font-medium text-white text-center"
              >
                Game Type:
              </label>
              <input
                type="gametype"
                name="gametype"
                id="gametype"
                value={condetails.gametype}
                onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>

            <div>
              <label
                for="Contest Selection"
                className="block mt-3 mb-2 text-sm font-medium text-white text-center"
              >
                Contest Selection:
              </label>
              <input
                type="contestselection"
                name="contestselection"
                id="contestselection"
                 value={condetails.contestselection}
                onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>

            <div>
              <label
                for="EntrySP"
                className="block mt-3 mb-2 text-sm font-medium text-white text-center"
              >
                EntrySP:
              </label>
              <input
                type="EntrySP"
                name="EntrySP"
                id="EntrySP"
                value={condetails.EntrySP}
                onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>

            <div>
              <label
                for="EntryEP"
                className="block mt-3 mb-2 text-sm font-medium text-white text-center"
              >
                EntryEP:
              </label>
              <input
                type="EntryEP"
                name="EntryEP"
                id="EntryEP"
                value={condetails.EntryEP}
                onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>

            <div>
              <label
                for="team"
                className="block mt-3 mb-2 text-sm font-medium text-white text-center"
              >
                Team:
              </label>
              <input
                type="team"
                name="team"
                id="team"
                value={condetails.team}
                onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>

            <div>
              <label
                for="amount"
                className="block mt-3 mb-2 text-sm font-medium text-white text-center"
              >
                Amount:
              </label>
              <input
                type="amount"
                name="amount"
                id="amount"
                value={condetails.amount}
                onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>


            <div>
              <label
                for="slot"
                className="block mt-3 mb-2 text-sm font-medium text-white text-center"
              >
                Slot:
              </label>
              <input
                type="slot"
                name="slot"
                id="slot"
                value={condetails.slot}
                onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>

            <div>
              <label
                for="noofcontest"
                className="block mt-3 mb-2 text-sm font-medium text-white text-center"
              >
                No of Contest:
              </label>
              <input
                type="noofcontest"
                name="noofcontest"
                id="noofcontest"
                value={condetails.noofcontest}
                onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>

            <div>
              <label
                for="refresh"
                className="block mt-3 mb-2 text-sm font-medium text-white text-center"
              >
                Refresh:
              </label>
              <input
                type="refresh"
                name="refresh"
                id="refresh"
                value={condetails.refresh}
                onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>

            <button type = "submit" onClick={submitHandle} className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none font-medium text-sm px-5 py-2.5 mt-5 text-center hover:bg-primary-700 focus:ring-primary-800">
              Submit
            </button>
          </form>
          
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
