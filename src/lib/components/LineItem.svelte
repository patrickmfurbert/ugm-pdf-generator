<script>
  export let itemName;
</script>

<div class="line-item">
    <p>{itemName}</p>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
</div>

<style>
  .line-item {
    display: flex;
    align-items: center; /* Vertically align items */
    gap: 1rem; /* Add spacing between elements */
    margin-bottom: 1.5rem; /* Add vertical spacing between LineItems */
  }

  .line-item p {
    margin: 0; /* Remove default margin */
    text-align: right; /* Right-align the text */
    padding-right: 1rem; /* Add padding between the text and inputs */
    width: 150px; /* Ensure uniform width for alignment */
    font-family: 'Poppins', sans-serif; /* Modern and stylish font */
    font-size: 1.2rem; /* Increase font size */
    font-weight: 500; /* Add a medium weight for style */
  }

  .line-item input {
    padding: 0.5rem 0; /* Increase padding for larger input */
    border: none; /* Remove the box border */
    border-bottom: 1px solid #ccc; /* Add a bottom border for the line */
    outline: none; /* Remove the focus outline */
    width: 200px; /* Increase width for larger input */
    font-size: 1rem; /* Increase font size */
    font-family: 'Poppins', sans-serif; /* Match the font with the text */
  }

  .line-item input:focus {
    border-bottom: 1px solid #007bff; /* Highlight the line on focus */
  }
</style>