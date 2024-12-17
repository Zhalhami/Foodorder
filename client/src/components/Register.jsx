import React from "react"


function Register() {
    return (
        <div>
            <form action="/register" method="POST">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" name="username" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password" />
            </div>
            <button type="submit" class="btn btn-dark">Register</button>
          </form>
        </div>
    )
}

export default Register;