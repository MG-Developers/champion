<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <!-- <link href="style.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="../../../css/styles.css">

    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <style>
        .infinity-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-size: cover;
            min-height: 100vh;
        }

        @media (min-width: 768px) {
            .infinity-container {
                background: url('bg.png') center no-repeat;
            }

            .infinity-form {
                box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.1);
                border-radius: 10px;
                width: 28rem;
            }

        }

        .infinity-form {
            background: white;
        }

        .infinity-form h4 {
            font-weight: bold;
        }

        .infinity-form .form-input {
            position: relative;
        }

        .infinity-form .form-input input {
            width: 100%;
            margin-bottom: 20px;
            height: 40px;
            border: none;
            border-bottom: 2px solid #777;
            outline: none;
            background: transparent;
            padding-left: 40px;
            font-weight: bold;
            color: #777;
        }

        .infinity-form .form-input span {
            position: absolute;
            top: 8px;
            padding-left: 10px;
            color: #777;
        }

        .infinity-form .form-input input::placeholder {
            padding-left: 0px;
        }

        .infinity-form .form-input input:focus,
        .infinity-form .form-input input:valid {
            border-bottom: 2px solid #57b894;
        }

        .infinity-form .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
            background-color: #4ea585 !important;
            border: 0px;
        }

        .infinity-form button[type="submit"] {
            margin-top: 10px;
            border: none;
            cursor: pointer;
            border-radius: 20px;
            background: linear-gradient(45deg, #4ea585, #57b894);
            color: #fff;
            font-weight: bold;
            transition: 0.5s;
            margin-bottom: 10px;
        }

        .infinity-form button[type="submit"]:hover {
            background: linear-gradient(45deg, #57b894, #4ea585);
        }

        .forget-link,
        .login-link,
        .register-link {
            color: #57b894;
            font-weight: bold;
        }

        .forget-link:hover,
        .login-link:hover,
        .register-link:hover {
            color: #4ea585;
            text-decoration: none;
        }

        .infinity-form .btn-social {
            color: #fff;
            border: 0;
            display: inline-block;
            font-weight: bold;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            margin: 0px;
            margin-right: 10px;
            margin-bottom: 10px;
        }

        .infinity-form .btn-facebook {
            background: #4866a8;
        }

        .infinity-form .btn-google {
            background: #da3f34;
        }

        .infinity-form .btn-twitter {
            background: #33ccff;
        }

        .infinity-form .btn-facebook:hover {
            background: hsla(221, 40%, 40%, 1);
        }

        .infinity-form .btn-google:hover {
            background: hsla(4, 59%, 47%, 1);
        }

        .infinity-form .btn-twitter:hover {
            background: hsla(195, 78%, 54%, 1);
        }

        #captcha-container {
            font-size: 24px;
            margin-bottom: 10px;
        }

        #captcha-input {
            padding: 7px;
            font-size: 16px;
            margin-bottom: 10px;
        }

        #check-captcha {
            margin-top: 6px;
            padding: 8px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="container infinity-container">
        <div class="row">
            <div class="col-md-1 infinity-left-space"></div>

            <!-- FORM BEGIN -->
            <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 text-center infinity-form">
                <!-- Company Logo -->
                <div class="text-center mb-3 mt-5">
                    <img src="https://techzeero.com/html-templates/login-forms/green-login-form/logo.png" width="150px">
                </div>
                <div class="text-center mb-4">
                    <h4>Login into vendor portal</h4>
                </div>
                <!-- Form -->
                <form class="px-3" id="myform">
                    <!-- Input Box -->
                    <div class="form-input">
                        <span><i class="fa fa-user"></i></span>
                        <input type="text" name="username" id="username" placeholder="User Name" tabindex="10">
                    </div>
                    <div class="form-input">
                        <span><i class="fa fa-lock"></i></span>
                        <input type="password" name="password" id="password" placeholder="Password">
                    </div>


                    <div id="captcha-container"></div>
                    <input type="text" id="captcha-input" placeholder="Enter Captcha" class="form-control">


                    <!-- Login Button -->
                    <div class="mb-3">
                        <button type="submit" class="btn btn-block" id="check-captcha">Login</button>
                    </div>
                    <div class="text-right ">
                        <a href="reset.html" class="forget-link">Forgot password?</a>
                    </div>
                    <div class="text-center mb-2">
                        <!-- <div class="text-center mb-3" style="color: #777;">or login with</div> -->

                        <!-- Facebook Button -->
                        <a href="" class="btn btn-social btn-facebook"><i class="fa fa-facebook"></i></a>

                        <!-- Google Button -->
                        <a href="" class="btn btn-social btn-google"><i class="fa fa-google"></i></a>

                        <!-- Twitter Button -->
                        <a href="" class="btn btn-social btn-twitter"><i class="fa fa-twitter"></i></a>
                    </div>
                    <div class="text-center mb-5" style="color: #777;">Don't have an account?
                        <a class="register-link" href="register.html">Register here</a>
                    </div>
                </form>
            </div>
            <!-- FORM END -->

            <div class="col-md-1 infinity-right-space"></div>
        </div>
    </div>

</body>
<script src="../../../js/login1.js"></script>
<!-- Generate captcha -->
<script>
    document.addEventListener("DOMContentLoaded", function () {
        // Function to generate a random captcha
        function generateCaptcha() {
            var captcha = Math.random().toString(36).substring(2, 8).toUpperCase();
            document.getElementById("captcha-container").textContent = captcha;
            return captcha;
        }

        // Initial generation of captcha
        var captchaCode = generateCaptcha();

        // Event handler for checking the entered captcha
        document.getElementById("check-captcha").addEventListener("click", function () {
            var enteredCaptcha = document.getElementById("captcha-input").value.toUpperCase();

            if (enteredCaptcha === captchaCode) {
                alert("Captcha matched!");
                // Add your success logic here
            } else {
                alert("Captcha does not match. Please try again.");
                // Regenerate captcha and clear input
                captchaCode = generateCaptcha();
                document.getElementById("captcha-input").value = "";
            }
        });
    });
</script>

</html>