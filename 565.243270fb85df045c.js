"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[565],{6565:(A,u,a)=>{a.r(u),a.d(u,{AuthModule:()=>v});var p=a(6895),c=a(9299),n=a(4006),o=a(4650),h=a(892),l=a(7185),s=a(2554),g=a(1334);const d=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class t{constructor(r,e,m,I){this.fb=r,this.authService=e,this.route=m,this.toastr=I}ngOnInit(){this.logInForm=this.fb.group({email:["",[n.kI.required]],password:["",n.kI.required]})}logIn(){this.logInForm.valid&&this.authService.proceedLogin(this.logInForm.value).subscribe(r=>{null!=r&&(this.responceData=r,console.log("this"),console.log(" super admin",this.responceData),localStorage.setItem("token",this.responceData.access_token),this.route.navigate(["/","superAdmin"]),this.toastr.success(r.message))},r=>{this.authService.anyUserLogin(this.logInForm.value).subscribe(e=>{null!=e&&(this.responceData=e,localStorage.setItem("token",this.responceData?.access_token),localStorage.setItem("role",this.responceData?.role),"admin"===this.responceData?.role&&(this.route.navigate(["/","admin"]),this.toastr.success(e.message),console.log("user Id:",this.responceData?.role)),"student"===this.responceData?.role&&(this.route.navigate(["/","student"]),this.toastr.success(e.message),console.log("user Id:",this.responceData?.role)),"staff"===this.responceData?.role&&(this.route.navigate(["/","teacher-dashboard"]),this.toastr.success(e.message),console.log("user Id:",this.responceData?.role)))},e=>{this.errorMessage=e.error.errors,e.error.errors.email&&this.toastr.error(e.error.errors.email),e.error.errors.password&&this.toastr.error(e.error.errors.password)})})}logout(){this.authService.logOut()}}return t.\u0275fac=function(r){return new(r||t)(o.Y36(n.qu),o.Y36(h.e),o.Y36(c.F0),o.Y36(l._W))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:27,vars:1,consts:[[1,"bg-light","min-vh-100","d-flex","flex-row","align-items-center"],[1,"justify-content-center"],["md","5"],[1,"p-4"],[3,"formGroup","ngSubmit"],[1,"text-medium-emphasis"],[1,"mb-3"],["cInputGroupText",""],["cIcon","","name","cilUser"],["formControlName","email","type","email","placeholder","Enter your email"],[1,"mb-4"],["cIcon","","name","cilLockLocked"],["formControlName","password","type","password","placeholder","Enter your password"],["xs","6"],["cButton","","color","primary","type","submit",1,"px-4"],["xs","6",1,"text-right"],["cButton","","color","link",1,"px-0"]],template:function(r,e){1&r&&(o.TgZ(0,"div",0)(1,"c-container")(2,"c-row",1)(3,"c-col",2)(4,"c-card-group")(5,"c-card",3)(6,"c-card-body")(7,"form",4),o.NdJ("ngSubmit",function(){return e.logIn()}),o.TgZ(8,"h1"),o._uU(9,"Login"),o.qZA(),o.TgZ(10,"p",5),o._uU(11,"Sign In to your account"),o.qZA(),o.TgZ(12,"c-input-group",6)(13,"span",7),o.O4$(),o._UZ(14,"svg",8),o.qZA(),o.kcU(),o._UZ(15,"input",9),o.qZA(),o.TgZ(16,"c-input-group",10)(17,"span",7),o.O4$(),o._UZ(18,"svg",11),o.qZA(),o.kcU(),o._UZ(19,"input",12),o.qZA(),o.TgZ(20,"c-row")(21,"c-col",13)(22,"button",14),o._uU(23," Login "),o.qZA()(),o.TgZ(24,"c-col",15)(25,"button",16),o._uU(26," Forgot password? "),o.qZA()()()()()()()()()()()),2&r&&(o.xp6(7),o.Q6J("formGroup",e.logInForm))},dependencies:[s.AkF,s.yue,s.RMw,s.Hq3,s.e$z,s.iok,s.Yp0,g.ar,s.g8K,s.jOm,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u],styles:[".Login[_ngcontent-%COMP%]{color:#fff;text-decoration:none}input[_ngcontent-%COMP%]{border:4px solid #d8dbe0;width:78%;background-color:#d8dbe0;border-radius:5px}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.Bz.forChild(d),c.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[p.ez,f,s.dTQ,s.hJ1,s.zE6,g.QX,s.ejP,n.u5,n.UX,l.Rh]}),t})()}}]);