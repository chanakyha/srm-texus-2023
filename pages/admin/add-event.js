import {
  setDoc,
  doc,
  collection,
  getCountFromServer,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { Switch } from 'antd';
import { db } from "../../backend/firebase";

const AddEvent = () => {
  const [eventCount, setEventCount] = useState(0);

  const [rules, setRules] = useState(1);
  const [prizes, setPrizes] = useState(1);
  const [studentCount, setStudentCount] = useState(1);
  const [staffCount, setStaffCount] = useState(1);
  const [groupType, setGroupType] = useState("fixed");

  const getEventCount = async () => {
    const NoOfEvents = await getCountFromServer(collection(db, "events"));
    setEventCount(NoOfEvents.data().count);
  };

  var eventId = `TxEV${23000 + eventCount + 1}`;
  const formRef = useRef(null);
  const onChange = (checked) => {
    setGroupType(checked ? "notFixed" : "fixed");
  };

  const addEvent = (e) => {
    e.preventDefault();
    let details = [];

    for (let i = 0; i < 10 + rules + prizes + studentCount + staffCount; i++) {
      details.push(formRef.current[i].value);
    }
    let structuredDetails = {
      name: details[0],
      desc: details[1],
      organised: details[2],
      banner: details[3],
      fees: details[4],
      date: details[5],
      type: details[6],
      limit: details[7],
      size: details[8],
      venue: details[9],
      rules: details.slice(10, 10 + rules),
      prizes: details.slice(10 + rules, 10 + rules + prizes),
      studentCo: details.slice(
        10 + rules + prizes,
        10 + rules + prizes + studentCount
      ),
      staffCo: details.slice(
        10 + rules + prizes + studentCount,
        10 + rules + prizes + studentCount + staffCount
      ),
      groupType: groupType,
    };
    console.log(structuredDetails);

    setDoc(doc(db, "events", eventId), structuredDetails, { merge: true }).then(
      () => {
        alert("Event Added");
        console.log("Event Added");
        for (
          let i = 0;
          i < 10 + rules + prizes + studentCount + staffCount;
          i++
        ) {
          formRef.current[i].value = "";
        }

        getEventCount();
        setRules(1);
        setPrizes(1);
        setStudentCount(1);
        setStaffCount(1);
      }
    );
  };

  useEffect(() => {
    getEventCount();
  }, [eventCount]);

  return (
    <div className="min-h-[calc(100vh-330px)]">
      <form
        ref={formRef}
        onSubmit={(e) => addEvent(e)}
        className="w-full h-full bg-black font-montserrat text-white "
      >
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl text-center">ADD EVENT</h1>
        </div>
        <div className="w-full max-w-2xl h-full mt-4 gap-4 flex flex-col mx-auto text-white py-0 p-[30px] rounded-xl">
          <input
            className="w-full max-w-2xl p-3 rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            placeholder="Event Name"
          />
          <textarea
            className=" w-full max-w-2xl p-3 rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            placeholder="Description"
          />
          <input
            className=" w-full p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            placeholder="Origanised By"
          />
          <input
            className=" w-full p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            placeholder="Banner URL"
          />
          <input
            className=" w-full p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            placeholder="Entry Fees"
          />
          <input
            className=" w-full p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="datetime-local"
            placeholder="Date Time"
          />
          <select className=" w-full p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent">
            <option disabled hidden value="">
              Select Event Type
            </option>
            <option value="technical">Technical</option>
            <option value="non technical">Non-Technical</option>
            <option value="workshop">Workshop</option>
          </select>

          <input
            className=" w-full p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="number"
            placeholder="Limit"
          />
          <div className="grid lg:grid-cols-2 gap-3">
            <input
              className=" w-full max-w-2xl p-3 rounded-md placeholder-[#858585] bg-[#222222] outline-none"
              type="number"
              placeholder="Max Team Size"
            />
            <input
              className=" w-full max-w-2xl p-3 rounded-md bg-[#222222] placeholder-[#858585] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
              type="text"
              placeholder="Venue"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h1>Rules</h1>
              <div className="flex items-center gap-2">
                <SubIcon
                  state={rules}
                  onClick={() => {
                    if (rules > 1) setRules(rules - 1);
                  }}
                />
                <AddIcon onClick={() => setRules(rules + 1)} />
              </div>
            </div>
            <div className="space-y-4">
              {Array(rules)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div className="space-y-2" key={index}>
                      <input
                        className="w-full flex items-center p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
                        type="text"
                        placeholder={`Rule ${index + 1}`}
                      />
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center gap-2">
              <h1>Prizes</h1>
              <div className="flex items-center gap-2">
                <SubIcon
                  state={prizes}
                  onClick={() => {
                    if (prizes > 1) setPrizes(prizes - 1);
                  }}
                />
                <AddIcon onClick={() => setPrizes(prizes + 1)} />
              </div>
            </div>
            <div className="space-y-4">
              {Array(prizes)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div className="space-y-2" key={index}>
                      <input
                        className="w-full flex items-center p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
                        type="text"
                        placeholder={`Prize ${index + 1}`}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center gap-2">
              <h1>Student Coordinator</h1>
              <div className="flex items-center gap-2">
                <SubIcon
                  state={studentCount}
                  onClick={() => {
                    if (studentCount > 1) setStudentCount(studentCount - 1);
                  }}
                />
                <AddIcon onClick={() => setStudentCount(studentCount + 1)} />
              </div>
            </div>
            <div className="space-y-4">
              {Array(studentCount)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div className="space-y-2" key={index}>
                      <input
                        className="w-full flex items-center p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
                        type="text"
                        placeholder={`Student ${
                          index + 1
                        } • (Student, Contact Number)`}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center gap-2">
              <h1>Staff Coordinator</h1>
              <div className="flex items-center gap-2">
                <SubIcon
                  state={staffCount}
                  onClick={() => {
                    if (staffCount > 1) setStaffCount(staffCount - 1);
                  }}
                />
                <AddIcon onClick={() => setStaffCount(staffCount + 1)} />
              </div>
            </div>
            <div className="space-y-4">
              {Array(staffCount)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div className="space-y-2" key={index}>
                      <input
                        className="w-full flex items-center p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
                        type="text"
                        placeholder={`Staff ${
                          index + 1
                        } • (Staff, Contact Number)`}
                      />
                    </div>
                  );
                })}
            </div>
            <div className="flex justify-between w-full">
              <span>Min-Max Group</span>
              <Switch onChange={onChange} />
            </div>
          </div>

          <button className="bg-gradient-to-r from-[#FFEA2C] via-[#FF7A5D] to-[#FF0000] w-full max-w-2xl outline-none border-transparent my-2 h-14 pl-[15px] text-black font-bold rounded-md ">
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;

const AddIcon = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 cursor-pointer"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

const SubIcon = ({ onClick, state }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={state > 1 ? "w-6 h-6 cursor-pointer text-red-500" : "hidden"}
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
    </svg>
  );
};
