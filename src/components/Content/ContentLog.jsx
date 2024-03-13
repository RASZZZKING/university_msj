"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";


const ContentLog = () => {
    const refInput = useRef();
    const router = useRouter();
    const [logState, setLogState] = useState(0);
    const [dataInput, setDataInput] = useState({
      email: "",
      password: "",
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setDataInput((dataPrev) => ({
        ...dataPrev,
        [name]: value,
      }));
    };
    const LogInHandle = (event) => {
      const keyword = refInput.current.value;
      if (!keyword) return;
      event.preventDefault();
      const pwDatabase = "ytta";
      if (dataInput.password.trim() !== pwDatabase) {
        setLogState(2);
        setTimeout(() => {
          setLogState(0);
          return;
        }, 2000);
      } else {
        setLogState(1);
        setTimeout(() => {
          router.push("/Users");
        }, 2000);
      }
    };
  
    return (
      <>
        <div
          className={`flex ${logState === 0 ? "hidden" : null} justify-center`}
        >
          <div
            role="alert"
            className={`alert alert-${
              logState === 1 ? "success" : "error"
            } absolute z-10 mt-5 w-auto`}
          >
            {logState === 1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
  
            <span>
              {logState === 1
                ? "Berhasil Login!"
                : "Password atau Username salah"}
            </span>
          </div>
        </div>
        <div
          className="bg-color-primary w-full min-h-svh  flex  justify-around items-center"
          data-theme="light"
        >
          <Image
            src={"/../../favicon.ico"}
            height={1000}
            width={1000}
            className="aspect-square h-96 w-96 max-xl:hidden flex-none rounded-xl object-cover"
          />
          <div className=" flex flex-col justify-center items-center ">
            <div className="text-center justify-center">
              <h1 className="text-5xl font-bold drop-shadow-2xl">Ayo Masuk!</h1>
              <p className="pb-6 pt-3 text-sm max-w-sm max-w-440">
                Segera lengkapi data data yang belum dimasukan, semakin cekatan
                semakin aman.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-color-primary">
              <form className="card-body" method="POST">
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-color-dark font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                    onChange={handleChange}
                    ref={refInput}
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered  "
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-color-dark font-semibold">
                      Password
                    </span>
                  </label>
                  <input
                    onChange={handleChange}
                    ref={refInput}
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered  "
                    required
                  />
                  <label className="label flex justify-between">
                    <Link
                      href="/Register"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </Link>
                    <Link
                      href="/Register"
                      className="label-text-alt link link-hover"
                    >
                      Dont have account?
                    </Link>
                  </label>
                </div>
                <div className="form-control flex-row mt-2 gap-2">
                  <Link
                    href="/Register"
                    className="btn btn-color-dark flex-1"
                  >
                    <FontAwesomeIcon
                      icon={faGoogle}
                      width={1000}
                      height={1000}
                      className="w-4 h-4 mr-4 -mt-0.5"
                    />
                    SIGN UP
                  </Link>
                  <button
                    onClick={LogInHandle}
                    className="btn btn-color-dark flex-1"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ContentLog
  