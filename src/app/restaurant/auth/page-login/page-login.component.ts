import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SessionService} from '@app/_services/session/session.service';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.sass']
})
export class PageLoginComponent implements OnInit, OnDestroy {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private session: SessionService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submit(e: Event) {
    e.preventDefault();
    if (this.form.invalid) {
      return;
    }

    this.session.login(this.form.value)
      .pipe(
        take(1),
        untilDestroyed(this)
      )
      .subscribe(() => this.router.navigateByUrl('/admin'));
  }

  ngOnDestroy() {
  }
}
