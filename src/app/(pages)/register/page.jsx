"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input, Link } from "@nextui-org/react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const RegisterPage = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("*Username is required"),
      email: Yup.string()
        .email("*Invalid email address")
        .required("*Email is required"),
      password: Yup.string()
        .min(6, "*Password must be at least 6 characters")
        .required("*Password is required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);
      try {
        const { data } = await axios.post("/api/auth/register", values);
        console.log("res in frontend :", data.message);
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

  const handleChange = (e) => {
    console.log(`Changing ${e.target.name} to:`, e.target.value);
    formik.handleChange(e);
  };

  return (
    <div className="h-screen grid w-full bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 relative">
      <div className="flex flex-col items-center gap-4 mt-auto">
        <div className="w-20 h-20 rounded-full box-content bg-slate-200">
          <Image
            src="/assets/icons/avatar2.svg"
            priority={true}
            alt="avatar"
            width={60}
            height={60}
            className="object-contain w-full h-full"
          />
        </div>

        <p className="font-bold font-jost text-xl capitalize text-white">
          Prayag Bhimani
        </p>

        <form onSubmit={formik.handleSubmit} className="grid">
          <Input
            type="string"
            name="userName"
            value={formik.values.userName}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            placeholder="username"
            labelPlacement="outside"
            className="rounded-xl mt-3"
            startContent={
              <FaUser className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className="text-red-400 p-2 text-sm font-bold">
              {formik.errors.userName}
            </div>
          ) : null}

          <Input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            autoComplete="prayag"
            placeholder="email"
            labelPlacement="outside"
            className="rounded-xl mt-3"
            startContent={
              <HiOutlineMail className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-400 p-2 text-sm font-bold">
              {formik.errors.email}
            </div>
          ) : null}

          <Input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={handleChange}
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
            <div className="text-red-400 p-2 text-sm font-bold">
              {formik.errors.password}
            </div>
          ) : null}
          <Link
            href={"/login"}
            className="mt-3 mx-auto flex gap-2 items-center"
          >
            <span className="text-medium text-white font-medium">
              Already have an account ? Login Here
            </span>
          </Link>
          <Button
            variant="shadow"
            type="submit"
            color="default"
            isLoading={formik.isSubmitting}
            className="w-full text-white bg-black font-extrabold mt-4"
          >
            Register
          </Button>
        </form>
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

export default RegisterPage;
