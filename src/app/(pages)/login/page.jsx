"use client";
import React from "react";
import { useFormik } from "formik";
import { Button, Input, Link } from "@nextui-org/react";
import { HiLockClosed } from "react-icons/hi2";
import { MdArrowRightAlt } from "react-icons/md";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import Image from "next/image";
import axios from "axios";
import { HiOutlineMail } from "react-icons/hi";

const LoginPage = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required").min(6),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      try {
        const { data } = await axios.post("/api/auth/login", values);
        console.log("res in frontend :", data);
        console.log("Fetching data from backend....");

        // Show success toast
        toast.success(data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        resetForm();
        router.push("/");
        setSubmitting(false);
      } catch (error) {
        // Show error toast
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        resetForm();
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="h-screen grid place-items-center w-full bg-gradient-to-r from-pink-300  from-0% via-violet-300 via-65% to-indigo-500 relative">
      <div className="flex flex-col items-center justify-center gap-4 mt-auto w-max">
        <div className="w-20 h-20 -mb-2 rounded-full box-content bg-slate-200">
          <Image
            src="/assets/icons/avatar.svg"
            alt="avatar"
            priority={true}
            width={60}
            height={60}
            className="object-contain w-full h-full"
          />
        </div>

        <p className="font-bold font-jost text-xl capitalize text-slate-600">
          Login to Dashboard
        </p>
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="email"
            labelPlacement="outside"
            className="rounded-xl mt-3"
            startContent={
              <HiOutlineMail className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-black p-2 text-sm font-bold">
              {formik.errors.email}
            </div>
          ) : null}

          <Input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="prayag"
            placeholder="password"
            labelPlacement="outside"
            className="rounded-xl mt-3"
            startContent={
              <HiLockClosed className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-black p-2 text-sm font-bold">
              {formik.errors.password}
            </div>
          ) : null}
          <Link
            href={"/register"}
            className="mx-auto mt-3 flex gap-2 items-center justify-center"
          >
            <span className="text-medium text-white font-medium">
              Create New Account
            </span>
            <MdArrowRightAlt className="text-xl text-white" />
          </Link>
          <Button
            variant="solid"
            type="submit"
            color="default"
            className="w-full bg-black text-white font-extrabold mt-3"
            isLoading={formik.isSubmitting}
          >
            Signin
          </Button>
        </form>

        <Link href={"/"} className="text-medium text-white font-light ">
          Forgot Username/Password ?
        </Link>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default LoginPage;
