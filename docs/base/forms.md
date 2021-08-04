# Forms

The examples on this page show how we manage forms and their fields. Recommendations are based on Adam Silver's article [Form design: from zero to hero all in one blog post](https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/) and the [GOV.UK design system](https://design-system.service.gov.uk/components/).

## Top tips

- Every `<input>` needs a `<label>`. Put labels above the input.
- Do not use the `placeholder` attribute on `<input>` fields.
- Use [fixed width inputs](#fixed-width-inputs) for content that has a specific, known length. Postcode inputs should be postcode-sized, telephone number inputs should be telephone number-sized.
- Make form fields look like form fields: apply a border and make sure they are empty to begin with. A height of 44px or more makes them easy to tap on touch screen devices.
- Make sure any `<button>` looks like a button. Align them to the left edge of the last input (the right edge for right-to-left languages) where users naturally look for them. Use a verb for button text because the user is doing something, and relate it to what they are doing - avoid generic ‘Submit’ buttons.
- The `<select>` element should be a last resort as they’re really hard to use. Try radio buttons instead. If there’s a long list of options, use JavaScript to enhance the `<select>` into an [auto-complete field](#auto-complete) (not to be confused with the `autocomplete` attribute).
- If you have to use a `<select>`, don't submit a form when its value changes. Select boxes that submit the form automatically when the user selects an option cause problems for keyboard and screen reader users.

## How to add hint text

To provide hint text advising how to complete a field, add a `<div class="field-hint">`. Check the examples that follow to see where this should be added. The pattern differs slightly for checkbox and radio inputs compared to other input types.

Each instance of `<div class="field-hint">` must have a unique ID that is used as the value of the `aria-describedby` attribute that must be added to the associated `<input>`. 

Apollo uses the pattern `id="hint-...`. Replace the `...` with your unique wording.

Provide hint text when users are more likely to make a mistake, such as when having to satisfy a complex set of password rules. Error messages should be a last resort. Keep hint text brief and to the point. Do not use long paragraphs and lists.

## Dealing with text

```
<form>
    <div class="field">
        <label for="name">
            <span class="field-label">Name</span>
        </label>
        <div class="field-hint" id="hint-name">E.g. Robin Smith</div>
        <input type="text" id="name" name="name" autocomplete="name" aria-describedby="hint-name">
    </div
    
    <div class="field">
        <label for="email">
            <span class="field-label">Email</span>
        </label>
        <div class="field-hint" id="hint-email">E.g. robin.smith@example.co.uk</div>
        <input type="email" id="email" name="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" inputmode="email" aria-describedby="hint-email">
    </div>
    
    <div class="field">
        <label for="website">
            <span class="field-label">Website address</span>
        </label>
        <input type="url" id="website" name="website" autocomplete="url" autocapitalize="none" autocorrect="off" spellcheck="false" inputmode="url">
    </div>
    
    <div class="field">
        <label for="password">
            <span class="field-label">Password</span>
        </label>
        <div class="field-hint" id="hint-password">Must contain 8+ characters with at least 1 number</div>
        <input type="password" id="password" name="password" autocapitalize="none" autocorrect="off" spellcheck="false" aria-describedby="hint-password">
    </div>
    
    <div class="field">
        <label for="message">
            <span class="field-label">Your message</span>
        </label>
        <textarea id="message" name="message"></textarea>
    </div>
</form>
```

### How to make filling in text fields easier

Use the specific input `type` when asking for email addresses, URLs and passwords.

Adding the `autocomplete` attribute to common fields such as name, address, email etc. can help to speed up the form filling process for users. Here is a [list of valid autocomplete values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values).

Use `autocapitalize="none"`, `autocorrect="off"` and `spellcheck="false"` to stop browsers automatically changing user input on fields that expect grammatically incorrect data, such as email addresses and passwords.

## Dealing with numbers

```
<form>
    <div class="field">
        <label for="account-number">
            <span class="field-label">Account number</span>
        </label>
        <div class="field-hint" id="hint-account-number">Must be between 6 and 8 numbers long</div>
        <input type="text" class="input-width-10" id="account-number" name="account-number" pattern="[0-9]*" maxlength="8" inputmode="numeric" aria-describedby="hint-account-number">
    </div>
    
    <div class="field">
        <label for="telephone-number">
            <span class="field-label">Phone number</span>
        </label>
        <div class="field-hint" id="hint-telephone-number">Please include your country code</div>
        <input type="tel" class="input-width-20" id="telephone-number" name="telephone-number" autocomplete="tel" inputmode="tel" aria-describedby="hint-telephone-number">
    </div>
    
    <div class="field">
        <label for="guests">
            <span class="field-label">Number of guest tickets required</span>
        </label>
        <input type="number" class="input-width-3" id="guests" name="guests" value="0" pattern="[0-9]*">
    </div>
</form>
```

### How to make filling in number fields easier

In many cases, it's better to use `<input type="text" pattern="[0-9]*>` rather than `<input type="number">` when dealing with numbers. Adam Silver has written about [when to use the number input](https://adamsilver.io/articles/form-design-when-to-use-the-number-input/).

For telephone numbers, use the specific `type="tel"` attribute on the `<input>`.

When asking for payment details, including the `autocomplete` attribute can help users complete their responses more quickly. Older browsers make use of the `name` attribute to achieve the same thing. Here is a [list of payment autofill attributes](https://www.smashingmagazine.com/2017/03/improve-billing-form-ux/).

## Dealing with dates and times

```
<form>
    <div class="field">
        <label for="arrival-date">
            <span class="field-label">Date of arrival</span>
        </label>
        <div class="field-hint" id="hint-arrival-date">For example 30/05/2021</div>
        <input type="text" class="input-width-10" id="arrival-date" name="arrival-date" aria-describedby="hint-arrival-date">
    </div>
    
    <div class="field">
        <fieldset role="group" aria-describedby="hint-date-of-birth">
            <legend>
                <span class="field-label">Date of birth (an example of a memorable date)</span>
            </legend>
            <div class="field-hint u-no-margin-top" id="hint-date-of-birth">For example 20 07 1972</div>
            <div class="memorable-date">
                <label for="bday-day" class="faux-label">Day</label>
                <input type="text" class="input-width-2" id="bday-day" name="bday-day" autocomplete="bday-day" pattern="[0-9]*" inputmode="numeric" min="0" max="31">
            </div>
            <div class="memorable-date">
                <label for="bday-month" class="faux-label">Month</label>
                <input type="text" class="input-width-2" id="bday-month" name="bday-month" autocomplete="bday-month" pattern="[0-9]*" inputmode="numeric" min="1" max="12">
            </div>
            <div class="memorable-date">
                <label for="bday-year" class="faux-label">Year</label>
                <input type="text" class="input-width-4" id="bday-year" name="bday-year" autocomplete="bday-year" pattern="[0-9]*" inputmode="numeric" min="1900" max="2050">
            </div>
        </fieldset>
    </div>
    
    <div class="field">
        <fieldset role="group" aria-describedby="hint-meeting-time">
            <legend>
                <span class="field-label">Specify a start time for your meeting</span>
            </legend>
            <div class="field-hint u-no-margin-top" id="hint-meeting-time">Use <dfn id="utc"><abbr title="Coordinated Universal Time">UTC</abbr></dfn> and your local time zone</div>
            <div class="input-group">
                <div>
                    <label for="meeting-time" class="faux-label">Start time</label>
                        <input type="text" class="input-width-5" id="meeting-time" name="meeting-time">
                </div>
                <div>
                    <label for="meeting-time" class="faux-label">Time zone</label>
                    <select id="timezone" name="timezone">
                        <option value="UTC−12:00">UTC−12:00</option>
                        <option value="UTC−11:00">UTC−11:00</option>
                        <option value="UTC−10:00">UTC−10:00</option>
                        <option value="UTC−09:30">UTC−09:30</option>
                        <option value="UTC−09:00">UTC−09:00</option>
                        <option value="UTC−08:00">UTC−08:00</option>
                        <option value="UTC−07:00">UTC−07:00</option>
                        <option value="UTC−06:00">UTC−06:00</option>
                        <option value="UTC−05:00">UTC−05:00</option>
                        <option value="UTC−04:00">UTC−04:00</option>
                        <option value="UTC−03:30">UTC−03:30</option>
                        <option value="UTC−03:00">UTC−03:00</option>
                        <option value="UTC−02:00">UTC−02:00</option>
                        <option value="UTC−01:00">UTC−01:00</option>
                        <option value="UTC±00:00" selected>UTC±00:00</option>
                        <option value="UTC+01:00">UTC+01:00</option>
                        <option value="UTC+02:00">UTC+02:00</option>
                        <option value="UTC+03:00">UTC+03:00</option>
                        <option value="UTC+03:30">UTC+03:30</option>
                        <option value="UTC+04:00">UTC+04:00</option>
                        <option value="UTC+04:30">UTC+04:30</option>
                        <option value="UTC+05:00">UTC+05:00</option>
                        <option value="UTC+05:30">UTC+05:30</option>
                        <option value="UTC+05:45">UTC+05:45</option>
                        <option value="UTC+06:00">UTC+06:00</option>
                        <option value="UTC+06:30">UTC+06:30</option>
                        <option value="UTC+07:00">UTC+07:00</option>
                        <option value="UTC+08:00">UTC+08:00</option>
                        <option value="UTC+08:45">UTC+08:45</option>
                        <option value="UTC+09:00">UTC+09:00</option>
                        <option value="UTC+09:30">UTC+09:30</option>
                        <option value="UTC+10:00">UTC+10:00</option>
                        <option value="UTC+10:30">UTC+10:30</option>
                        <option value="UTC+11:00">UTC+11:00</option>
                        <option value="UTC+12:00">UTC+12:00</option>
                        <option value="UTC+12:45">UTC+12:45</option>
                        <option value="UTC+13:00">UTC+13:00</option>
                        <option value="UTC+14:00">UTC+14:00</option>
                    </select>
                </div>
            </div>
        </fieldset>
    </div>
</form>
```

### How to make providing dates and times easier

For dates that the user will already know, such as birth dates, and dates that are easy to look up, use a series of simple text inputs. Note the use of `<fieldset>` and `<legend>` to group the separate text inputs together.

For other dates, due to inconsistencies with how different browsers and Assistive Technologies interpret `<input type="date">`, it is strongly recommended to use a simple text input. Provide [hint text](#how-to-add-hint-text) to let users know what format to use.

Again, due to inconsistencies with how different browsers and Assistive Technologies interpret `<input type="time">`, it is strongly recommended to use a simple text input. The preceding example includes a `<select>` to help users specify a local timezone.

## File input

```
<form>
    <div class="field">
        <label for="file">
            <span class="field-label">Choose a file</span>
        </label>
        <input type="file" id="file" name="file">
    </div>
</form>
```

## Checkboxes

```
<form>
    <div class="field">
        <fieldset role="group" aria-describedby="hint-things-you-like">
            <legend class="group-legend">Things you like</legend>
            <div class="field-hint" id="hint-things-you-like">Select all that apply.</div>
            <div class="checkbox-item">
                <input type="checkbox" name="chocolate" id="chocolate" appearance="base">
                <label for="chocolate">
                    <span class="faux-label">Chocolate</span>
                </label>
            </div>
							
            <div class="checkbox-item">
                <input type="checkbox" name="coffee" id="coffee" appearance="base">
                <label for="coffee">
                    <span class="faux-label">Coffee</span>
                </label>
            </div>
            
            <div class="checkbox-item">
                <input type="checkbox" name="cake" id="cake" appearance="base">
                <label for="cake">
                    <span class="faux-label">Cake</span>
                </label>
            </div>
			
            <div class="checkbox-item">
                <input type="checkbox" name="chips" id="chips" appearance="base" aria-describedby="hint-chips">
                <label for="chips">
                    <span class="faux-label">Chips</span>
                </label>
                <div class="field-hint" id="hint-chips">Fries or frites, not crisps.</div>
            </div>
		</fieldset>
	</div>
</form>
```

### How to make checkboxes easier to use

Always position checkboxes to the left of their labels (to the right for right-to-left languages). This makes them easier to find, especially for users of screen magnifiers.

If required, hint text can be added for the entire checkbox group and/or for individual checkbox items. The preceding example shows how to do this.

## Radios

```
<form>
    <div class="field">
        <fieldset role="group" aria-describedby="hint-name-change">
            <legend class="group-legend">Have you changed your name?</legend>
            <div class="field-hint" id="hint-name-change">This includes changing your family name or spelling your name differently.</div>
            <div class="radio-item">
                <input type="radio" id="name-change_yes" name="name-change" value="yes">
                <label for="name-change_yes">
                    <span class="faux-label">Yes</span>
                </label>
            </div>
            
            <div class="radio-item">
                <input type="radio" id="name-change_no" name="name-change" value="no" aria-describedby="hint-name-change">
                <label for="name-change_no">
                    <span class="faux-label">No</span>
                </label>
                <div class="field-hint" id="hint-name-change">Hint text for this radio item would go here.</div>
            </div>
        </fieldset>
	</div>
</form>
```

### How to make radios easier to use

Always position radios to the left of their labels (to the right for right-to-left languages). This makes them easier to find, especially for users of screen magnifiers.

Radio buttons cannot be unchecked once they are selected. So if the question is not mandatory, you'll need to include a ‘None’ or ‘Prefer not to say’ option.

If required, hint text can be added for the entire radio group and/or for individual radio items. The preceding example shows how to do this.

## Segmented options

The purpose is to show all available options outright, rather than hiding them behind a `<select>`. It can be used with either checkboxes, or with radio buttons as in the following example:

```
<form>
    <div class="field segmented-group-wrapper">
        <fieldset role="group" aria-describedby="hint-segmented-options">
            <legend class="group-legend">Segmented options (Radio)</legend>
            <div class="field-hint" id="hint-segmented-options">We understand that different people enjoy books in different ways, which is why we’re giving you lots of options.</div>
            <div class="l-switcher segmented-group">
                <div>
                    <div>
                        <input type="radio" class="input--radio" id="segmented-option-1" name="segmented-options">
                        <label for="segmented-option-1">
                            <span class="segmented-label">
                                <span>Budget option</span>
                                <span>Copy to explain this option in more detail.</span>
                            </span>
                        </label>
                    </div>
                    <div>
                        <input type="radio" class="input--radio" id="segmented-option-2" name="segmented-options" checked>
                        <label for="segmented-option-2">
                            <span class="segmented-label">
                                <span>Value option</span>
                                <span>Copy to explain this option in more detail.</span>
                            </span>
                        </label>
                    </div>
                    <div>
                        <input type="radio" class="input--radio" id="segmented-option-3" name="segmented-options">
                        <label for="segmented-option-3">
                            <span class="segmented-label">
                                <span>Expensive option</span>
                                <span>Copy to explain this option in more detail.</span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</form>
```

### Considerations

The basis of this pattern is the [switcher layout](../layouts/switcher.md). The default styles assume that there are three choices and are optimised for this. In the event of fewer or more choices, you can override the default `min-width` percentage by applying an additional class.

## Select

```
<form>
    <div class="field">
        <label for="sort">
            <span class="field-label">Sort by</span>
        </label>
        <select id="sort" name="sort">
            <option value="published">Recently published</option>
            <option value="updated" selected>Recently updated</option>
            <option value="views">Most views</option>
            <option value="comments">Most comments</option>
        </select>
    </div>
</form>
```

### Considerations

Before using the `<select>` element, try asking users questions which will allow you to present them with fewer options. This should lessen the need for the `<select>` element, which could be replaced with e.g. radios.

## Auto-complete

A `<select>` can be enhanced into an accessible autocomplete via JavaScript. Apollo uses [Accessible autocomplete](https://github.com/alphagov/accessible-autocomplete) to achieve this, and there are a number of [example customisations](https://alphagov.github.io/accessible-autocomplete/examples/) which can be followed.

Follow the default markup for a `<select>`, making sure to give it a unique ID which can be referenced in the JavaScript.

## An example of a simple search form

Here is one example of how to use `<input type="search">`. It is recommended to include `role="search"` on the parent `<form>` element.

Notice the use of the [box layout](../layouts/box.md) and [sidebar layout](../layouts/sidebar.md) in this example.

```
<div class="l-box">
    <label for="search">
        <span class="field-label">Search</span>
    </label>
    <div class="l-sidebar search">
        <form role="search">
            <div class="not-sidebar">
                <input type="search" id="search" name="search">
            </div>
            <div class="sidebar">
                <button type="submit" class="button" name="search">Search</button>
            </div>
        </form>
    </div>
</div>
```

## Grouping inputs to line up side-by-side

Apollo includes the class `.input-group` that can be used to align form inputs horizontally with each other, by applying Flexbox behaviour. You can see an example of this in the preceding example for [dealing with times](#dealing-with-dates-and-times).

### Considerations

This class should not be used in conjunction with radios or checkboxes. The pattern has not been fully tested with these input types and may not work well on smaller viewports. Furthermore, radios and checkboxes are easier to read and quicker to scan when presented vertically.

## Fixed width inputs

Apollo includes several CSS classes which, when added to an `<input>`, will reduce the maximum width of the input field to better suit the intended contents:

```
<form>
    <div class="field">
        <label for="width-30">
            <span class="field-label">30 character width</span>
        </label>
        <input type="text" class="input-width-30" id="width-30" name="width-30">
    </div>
    <div class="field">
        <label for="width-20">
            <span class="field-label">20 character width</span>
        </label>
        <input type="text" class="input-width-20" id="width-20" name="width-20">
    </div>
    <div class="field">
        <label for="width-10">
            <span class="field-label">10 character width</span>
        </label>
        <input type="text" class="input-width-10" id="width-10" name="width-10">
    </div>
    <div class="field">
        <label for="width-5">
            <span class="field-label">5 character width</span>
        </label>
        <input type="text" class="input-width-5" id="width-5" name="width-5">
    </div>
    <div class="field">
        <label for="width-4">
            <span class="field-label">4 character width</span>
        </label>
        <input type="text" class="input-width-4" id="width-4" name="width-4">
    </div>
    <div class="field">
        <label for="width-3">
            <span class="field-label">3 character width</span>
        </label>
        <input type="text" class="input-width-3" id="width-3" name="width-3">
    </div>
    <div class="field">
        <label for="width-2">
            <span class="field-label">2 character width</span>
        </label>
        <input type="text" class="input-width-2" id="width-2" name="width-2">
    </div>
</form>
```