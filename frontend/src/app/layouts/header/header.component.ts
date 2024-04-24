import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
<<<<<<< HEAD

=======
import { CreateRecipeComponent } from 'src/app/pages/create-recipe/create-recipe.component';
import { CreateMasterClassComponent } from 'src/app/pages/create-master-class/create-master-class.component';
>>>>>>> a96d3f678b85bf0d0073e491f2e93b6641975979
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component'; 
import { SignupPageComponent } from 'src/app/pages/signup-page/signup-page.component';
import { SearchService } from 'src/app/services/search.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  username: string = "";
  password: string = "";
  
  searchQuery: string = "";

  dialogRef!: MatDialogRef<LoginPageComponent>;
  dialogSignUp!: MatDialogRef<SignupPageComponent>;
<<<<<<< HEAD
=======
  dialogCreateRecipe!: MatDialogRef<CreateRecipeComponent>;
  dialogCreateMasterClass!: MatDialogRef<CreateMasterClassComponent>;
>>>>>>> a96d3f678b85bf0d0073e491f2e93b6641975979

  constructor(public dialog: MatDialog, private userService: UserService, private searchService: SearchService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
    }
  };

  onSearchInput(): void {    
    this.searchService.search(this.searchQuery);
  }

  openLoginDialog(): void {
    this.dialogRef = this.dialog.open(LoginPageComponent, {
      width: '500px',
      data: {
        isLogged: this.isLogged,
        username: this.username,
        password: this.password,
      }
    });

    this.dialogRef.componentInstance.loginSuccess.subscribe(data => {
      this.isLogged = data.isLogged;
      this.username = data.username;
      this.password = data.password;
      this.userService.username = data.username;
    });
  };

  openSignUpDialog(): void {
    this.dialogSignUp = this.dialog.open(SignupPageComponent, {
      width: '500px',
    });
<<<<<<< HEAD
=======
  }

  handleLogout(): void {
    localStorage.removeItem('token');
    this.isLogged = false;
    this.userService.username = '';
  };

  handleCreateRecipe(): void{
    this.dialogCreateRecipe = this.dialog.open(CreateRecipeComponent, {
      width: '500px',
    })
  }

  handleCreateMasterClass(): void{
    this.dialogCreateMasterClass = this.dialog.open(CreateMasterClassComponent, {
      width: '500px',
    })
>>>>>>> a96d3f678b85bf0d0073e491f2e93b6641975979
  }

  handleLogout(): void {
    localStorage.removeItem('token');
    this.isLogged = false;
    this.userService.username = '';
  };
}
