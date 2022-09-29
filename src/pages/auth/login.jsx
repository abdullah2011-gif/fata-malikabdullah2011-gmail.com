// import React, { useEffect } from "react";
// import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";
// import { userLogin } from "Redux/Actions";
// import { Paper, Button, Box, LinearProgress, Grid } from "@mui/material";
// import * as Yup from "yup";
// import { Form, Field, Formik } from "formik";
// import { TextField } from "formik-mui";
// import LoginIcon from "@mui/icons-material/Login";
// import { useSnackbar } from "notistack";

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid Email").required("Required"),
//   password: Yup.string().required("Required"),
// });

// const Login = () => {
//   //state
//   const { enqueueSnackbar: notify } = useSnackbar();

//   // redux
//   const dispatch = useDispatch();

//   // router
//   const router = useRouter();

//   // useEffect(() => {
//   //   router.prefetch("/");
//   //   router.prefetch("/dashboard");
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, []);

//   // const handleLogin = async (values, setSubmitting) => {
//   //   setTimeout(() => {
//   //     const loginEvent = new CustomEvent("login", {
//   //       detail: {
//   //         login: true,
//   //       },
//   //     });
//   //     window.dispatchEvent(loginEvent);
//   //     dispatch(userLogin(values));
//   //     localStorage.setItem("userDetails", JSON.stringify(values));
//   //     notify("Logged in.");
//   //     setSubmitting(false);
//   //   }, 1500);
//   // };

//   return (
//     <Grid container className="authPage">
//       <Grid
//         item
//         xs={12}
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Box
//           sx={{
//             width: {
//               xs: "600px",
//             },
//             marginX: {
//               xs: 2,
//               md: 0,
//             },
//           }}
//         >
//           <Paper className="px-3 pb-4 pt-1" elevation={3}>
//             <h3 className="text-center authHeading mb-4">Login</h3>
//             <Formik
//               initialValues={{
//                 email: "",
//                 password: "",
//               }}
//               onSubmit={(values, { setSubmitting }) => {
//                 handleLogin(values, setSubmitting);
//               }}
//               validationSchema={LoginSchema}
//             >
//               {({ submitForm, isSubmitting }) => (
//                 <Form>
//                   <Box margin={1}>
//                     <Field
//                       margin="dense"
//                       component={TextField}
//                       name="email"
//                       type="email"
//                       label="Email"
//                       required
//                       fullWidth
//                     />
//                   </Box>
//                   <Box margin={1}>
//                     <Field
//                       margin="dense"
//                       component={TextField}
//                       name="password"
//                       type="password"
//                       label="Password"
//                       required
//                       fullWidth
//                     />
//                   </Box>
//                   <Box margin={1}>
//                     <Button
//                       onClick={submitForm}
//                       fullWidth
//                       variant="contained"
//                       startIcon={<LoginIcon />}
//                       disabled={isSubmitting}
//                     >
//                       Login
//                     </Button>
//                     {isSubmitting && <LinearProgress className="mt-3" />}
//                   </Box>
//                 </Form>
//               )}
//             </Formik>
//           </Paper>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// Login.isLoggedOutPage = true;

// export default Login;
