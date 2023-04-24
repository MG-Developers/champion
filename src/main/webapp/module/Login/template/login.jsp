<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Login</title>
    <link href="../../../static/css/bootstrap.min.css" rel="stylesheet">
    <link href="../../../static/font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="../../../static/css/animate.css" rel="stylesheet">
    <link href="../../../static/css/style.css" rel="stylesheet">
    
</head>

<body class="gray-bg">

    <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div>
                <h1 class="logo-name">AP</h1>
            </div>
            <h3>Sign in</h3>
            <p>Hi There! Nice to see you again</p>
            <form class="m-t" role="form" action="#" id="kt_sign_in_form">
                <div class="form-group">
                    <input type="text" id="username" class="form-control" placeholder="Username" required="">
                </div>
                <div class="form-group">
                    <input type="password" id="password" class="form-control" placeholder="Password" required="">
                </div>
                <button type="submit"  id="kt_sign_in_submit" class="btn btn-primary block full-width m-b">Login</button>
                
                <a href="#"><small>Forgot password?</small></a>
                <p class="text-muted text-center"><small>Do not have an account?</small></p>
                <a class="btn btn-sm btn-white btn-block" href="#">Create an account</a>
            </form>
        </div>
    </div>
    
    <script src="../../../static/js/jquery-3.1.1.min.js"></script>
    
    <!-- <script src="../../configration/js/globalConfig.js"></script> -->
    <script src="../../Configration/js/globalConfig.js"></script>
    <!-- <script src="../../../cdn/js/sweetalert2.js"></script> -->
    <script src="../../../cdn/js/sweetalert.min.js"></script>
    <script src="../js/login.js"></script>
    

</body>

</html>
