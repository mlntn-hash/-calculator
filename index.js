const inputANode = document.querySelector(`.js-input-a`)
const selectOperationNode = document.querySelector(`.js-select-operation`)
const inputBNode = document.querySelector(`.js-input-b`)
const btnResultNode = document.querySelector(`.js-btn-result`)
const outputNode = document.querySelector(`.js-output`)

btnResultNode.addEventListener(`click`, function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectOperationNode.value;

    const result = calculate({
        a,
        b,
        operation
    });

    console.log(result);
    outputNode.innerHTML = result;
});

