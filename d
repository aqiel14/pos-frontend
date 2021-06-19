warning: LF will be replaced by CRLF in src/components/login/login.js.
The file will have its original line endings in your working directory
[1mdiff --git a/src/components/login/login.js b/src/components/login/login.js[m
[1mindex 4dd475b..f53422d 100644[m
[1m--- a/src/components/login/login.js[m
[1m+++ b/src/components/login/login.js[m
[36m@@ -17,7 +17,7 @@[m [mconst LoginSchema = Yup.object().shape({[m
   password: Yup.string().required('Password is required'),[m
 });[m
 [m
[31m-const Login = (props) => {[m
[32m+[m[32mexport default (props) => {[m
   const dispatch = useDispatch();[m
   const loginReducer = useSelector(({ loginReducer }) => loginReducer);[m
 [m
[36m@@ -44,24 +44,6 @@[m [mconst Login = (props) => {[m
     }[m
   }, []);[m
 [m
[31m-  // function submitForm(values, history) {[m
[31m-  //   axios[m
[31m-  //     .post(process.env.REACT_APP_API_URL + 'login', values)[m
[31m-  //     .then((res) => {[m
[31m-  //       if (res.data.result === 'success') {[m
[31m-  //         localStorage.setItem('TOKEN_KEY', res.data.token);[m
[31m-  //         swal('Success!', res.data.message, 'success').then((value) => {[m
[31m-  //           history.push('/dashboard');[m
[31m-  //         });[m
[31m-  //       } else if (res.data.result === 'error') {[m
[31m-  //         swal('Error!', res.data.message, 'error');[m
[31m-  //       }[m
[31m-  //     })[m
[31m-  //     .catch((error) => {[m
[31m-  //       console.log(error);[m
[31m-  //       return swal('Error!', error.message, 'error');[m
[31m-  //     });[m
[31m-  // };[m
   const showForm = ({[m
     values,[m
     errors,[m
[36m@@ -131,9 +113,8 @@[m [mconst Login = (props) => {[m
             theme='light'[m
             verifyCallback={(response) => {[m
               setFieldValue('recaptcha', response);[m
[31m-              console.log(response);[m
             }}[m
[31m-            onLoadBack={() => {[m
[32m+[m[32m            onloadCallback={() => {[m
               console.log('done loading!');[m
             }}[m
           />[m
[36m@@ -161,7 +142,7 @@[m [mconst Login = (props) => {[m
   };[m
 [m
   return ([m
[31m-    <div className='login-page'>[m
[32m+[m[32m    <div class='login-page'>[m
       <div className='register-box'>[m
         <div className='register-logo'>[m
           <a href='../../index2.html'>[m
[36m@@ -201,5 +182,3 @@[m [mconst Login = (props) => {[m
     </div>[m
   );[m
 };[m
[31m-[m
[31m-export default Login;[m
