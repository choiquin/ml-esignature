function capitalizeFirstLetter(words) {
  let separateWord = words.toLowerCase().split(" ");
  for (let i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(" ");
}

function handleSubmit(firstName, lastName,jobTitle,officePhone, emailAddress) {
   let officeAddress = document.querySelector("#officeAddress-input").value;
  let branchAddress = document.querySelector("#branchAddress-input").value;
  let division = document.querySelector("#divisionInput").value;
  let branch = document.querySelector("#branchInput").value; 
  

  function checkOfficePhone() {
    if (officePhone !== "") {
      officePhone = `  ${officePhone}`;
    }
  }
  checkOfficePhone();

 let assignedLocation="";
  function checkLocation() {
  
         if (document.getElementById('mlHO').checked) {

          assignedLocation = `${division}`;
        } 
         else if (document.getElementById('mlBranch').checked) {
          assignedLocation = `${branch}`;
        }
     
    }
  checkLocation(); 
  
  let address="";
  function checkAddress() {
  
         if (document.getElementById('mlHO').checked) {

          address = `${officeAddress}`;
        } 
         else if (document.getElementById('mlBranch').checked) {
          address = `${branchAddress}`;
        }
     
    }
    checkAddress(); 


  let card = document.querySelector("#card");
  let copySignature = document.querySelector("#copySignature");
  let copySignature2 = document.querySelector("#copySignature2");

  card.setAttribute("class", "visible");
  copySignature.setAttribute("class", "visible");
  copySignature2.setAttribute("class", "visible");

  let signature = document.querySelector("#signatureGenerated");



  signature.innerHTML = `<table style="min-width:700px; vertical-align:-webkit-baseline-middle; font-size: medium;font-family: Arial;" cellspacing="0" cellpadding="0">
    <tbody>
      <tr style="height: 12px">
        <td style="height: 120px"><a href="https://mlhuillier.com/" target="_blank">
          <img
            style="
              max-width: 200px;
              display: block;
              margin: 0 auto;
            "
            src="https://drive.google.com/uc?export=view&id=1fkJBfoGcPc5paz5OUHm4zyML4-9W-YEV"
            alt=""
            width="200"
          /></a>
        </td>
        <td style="height: 100px; width: 2px"></td>
        <td style="
            height: 90px;
            width: 100%;
            border-left: 3px solid #ff0000;
            border-buttom: none;
            display: block;">
          <h3 style="
              margin: 5px;
              font-size: 14px;
              color: #ff0000; text-transform: capitalize;">
              <strong> ${firstName} ${lastName}</strong>  
           <a style="
            text-decoration: none;
            color: #000000;
            font-size: 14px;text-transform: capitalize;
          ">|<strong> ${jobTitle}</strong></a>
          </h3>
          <p style="
              margin: 5px;
              font-weight: 500;
              color: #000000;
              font-size: 12px;
              line-height: 16px; text-transform: capitalize;">
            M. Lhuillier Financial Services | ${assignedLocation}
          </p>
          <p style="
              color: #000000;
              margin: 5px;
              font-size: 12px;
              line-height: 16px; text-transform: capitalize;">
            ${address}
          </p>
          <p style="
          color: #000000;
          margin: 5px;
          font-size: 12px;
          line-height: 16px; text-transform: lowercase;">
          +63 ${officePhone}&nbsp;| &nbsp; 
        <a
        style="
          text-decoration: underline;
          color: #0000ff;
          font-size: 12px;text-transform: lowercase;
        "
        href="mailto:${emailAddress}@mlhuillier.com"
        >${emailAddress}@mlhuillier.com</a>  
        &nbsp;|&nbsp;
        <a
        style="
          text-decoration: underline;
          color: #0000ff;
          font-size: 12px;
        "
        href="//www.mlhuillier.com" target="_blank">www.mlhuillier.com</a>
        </td>
      
    </tbody>
    
  </table>
  </tr>
      <tr style="height: 20px;  max-width: 230px;">
      <p style="font-size: 9px;text-justify;max-width:700px; text-transform: none;">
      This email is confidential and is intended only for the use of the individual to whom it is addressed. Any views or opinion presented are solely those of author and do not necessarily represent the company's. M Lhuillier accepts no liability for the content of this email, or for the consequences of any actions taken on the basis of the information provided. if you are not the intended recipient, be advised that you have received this email in error and that the use, dissemination, forwarding, printing, or copying of this email is strictly prohibited. If you have received this email in error, please notify the sender and immediately destroy all copies of the communication. For more information, kindly email 
      <a style="
      text-decoration: underline;
      color: #0000ff;
      font-size: 9.5px;text-transform: lowercase;
    "
    href="mailto:legal@mlhuillier.com"
    >legal@mlhuillier.com</a> 
      </p>
      </tr>
  `;}


   

document.addEventListener("DOMContentLoaded", function () {
  // Query the elements
  let copyButton = document.querySelector("#copyToClipboard2");
  let codeEle = document.querySelector("#signatureGenerated");

  copyButton.addEventListener("click", function () {
    let selection = window.getSelection();

    // Save the current selection
    let currentRange =
      selection.rangeCount === 0 ? null : selection.getRangeAt(0);

    // Select the text content of code element
    let range = document.createRange();
    range.selectNodeContents(codeEle);
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy to the clipboard
    try {
      document.execCommand("copy");
      copyButton.innerHTML = "Signature copied!";
      alert(
        "Signature Copied!"
      );
    } catch (err) {
      // Unable to copy
      copyButton.innerHTML = "Try again, Copy";
    } finally {
      // Restore the previous selection
      selection.removeAllRanges();
      currentRange && selection.addRange(currentRange);
    }
  });
});

// check the required field
function required(event) {
  event.preventDefault();

  let firstName = capitalizeFirstLetter(
    document.querySelector("#firstName-input").value
  );
  let lastName = capitalizeFirstLetter(
    document.querySelector("#lastName-input").value
  );
  let jobTitle = document.querySelector("#jobTitle-input").value;
  let officePhone = document.querySelector("#officePhone-input").value;
  
  let emailAddress = document.querySelector("#emailAddress-input").value;

  if (firstName === "" || lastName === "" || jobTitle === "" ||  officePhone === ""||emailAddress === "") {
    alert("Please fill in all the required fields");
  } 
  else {
    handleSubmit(firstName,lastName, jobTitle, officePhone, emailAddress);
  }
}
document.querySelector("#submit").addEventListener("click", required);


function setEnglish(event) {
  event.preventDefault();

  let english = document.querySelector("#english");

  english.classList.add("active");

 
  document.querySelector(
    '[for="firstName"]'
  ).innerHTML = `<label for="firstName" class="col-sm col-form-label">First Name<sup class="required">*(required)</sup></label>`;
  document.querySelector('[for="lastName"]').innerHTML = "Last Name";
  document.querySelector(
    '[for="jobTitle"]'
  ).innerHTML = `<label for="jobTitle" class="col-sm col-form-label"
                      >Job Title<sup class="required">*(required)</sup></label
                    >`;
  document.querySelector('[for="officeAddress"]').innerHTML = "Office Address";
  document.querySelector('[for="branchAddress"]').innerHTML = "Branch Address";
  document.querySelector('[for="division"]').innerHTML = "Division";
  document.querySelector('[for="branch"]').innerHTML = "Branch";

  document.querySelector(
    '[for="officePhone"]'
  ).innerHTML = `<label for="officePhone" class="col-sm col-form-label"
                      >Office Phone
                      <sub>
                        <em>(include the country code)</em>
                      </sub>
                    </label>`;


  let x = document.querySelectorAll("span.instruction");
  let i;
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "";
  }
}

document.querySelector("#english").addEventListener("click", setEnglish);
