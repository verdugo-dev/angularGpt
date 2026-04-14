import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'

export interface TextMessageEvent {
  file: File,
  prompt?: string | null,
}

@Component({
  selector: 'app-text-message-box-file',
  imports: [ReactiveFormsModule],
  templateUrl: './textMessageBoxFile.html',
  styleUrl: './textMessageBoxFile.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxFile {
  @Input() placeholder: string = "";
  @Input() disableCorrections: boolean = false;

  @Output() onMessage = new EventEmitter<TextMessageEvent>();


  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: [],
    file: [null, Validators.required]
  });
  public file: File | undefined;


  handleSelectedFile( event: any ) {
    const file = event.target.files.item(0);
    this.form.controls.file.setValue(file);

    console.log(file);
  }


  handleSubmit() {
    if (this.form.invalid) return;

    const {prompt, file} = this.form.value;

    this.onMessage.emit({prompt, file: file!});
    this.form.reset();
  }
}
