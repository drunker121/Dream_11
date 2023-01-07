import React, {useState} from "react";




const Home = () => {
  const [user, setUser] = useState({
    
  })
  const handleChange = () => {

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
          

          <form>
            <div>
              <label
                for="matchid"
                className="block mt-10 mb-2 text-sm font-medium text-white text-center"
                onChange={handleChange}
              >
                Match ID:
              </label>
              <input
                type="matchid"
                name="matchid"
                id="matchid"
                // value={userdetails.email}
                // onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>

            <div>
              <label
                for="tourid"
                className="block mt-3 mb-2 text-sm font-medium text-white text-center"
                onChange={handleChange}
              >
                Tour ID:
              </label>
              <input
                type="tourid"
                name="tourid"
                id="tourid"
                // value={userdetails.email}
                // onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>

            <div>
              <label
                for="game type"
                className="block mt-3 mb-2 text-sm font-medium text-white text-center"
              >
                Game Type:
              </label>
              <input
                type="gametype"
                name="gametype"
                id="gametype"
                // value={userdetails.email}
                // onChange={changeHandler}
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
                // value={userdetails.email}
                // onChange={changeHandler}
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
                // value={userdetails.email}
                // onChange={changeHandler}
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
                // value={userdetails.email}
                // onChange={changeHandler}
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
                // value={userdetails.email}
                // onChange={changeHandler}
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
                // value={userdetails.email}
                // onChange={changeHandler}
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
                // value={userdetails.email}
                // onChange={changeHandler}
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
                // value={userdetails.email}
                // onChange={changeHandler}
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
                // value={userdetails.email}
                // onChange={changeHandler}
                 className="border text-sm focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                // required
              />
            </div>

            
          </form>
          <button className="bg-white">
              Submit
            </button>
          </div>
        </div>
        {/* <div className="h-max flex justify-center mt-40">
          <div>
            <h1 className="text-6xl font-bold text-white">CRUD Operation on:</h1>
            <div className="flex justify-center mt-20">
              <a
                href="/teachers"
                className=" text-white bg-green-600 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-primary-500 font-bold px-5 py-3 text-center text-lg mr-3"
              >
                TEACHERS
              </a>
              <a
                href="/students"
                className=" text-white bg-green-600 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-primary-500 font-bold px-5 py-3 text-center text-lg ml-3"
              >
                STUDENTS
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
