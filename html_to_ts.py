import re

def html_to_ts(input_file_path, output_file_path, ts_variable_name):
    # Read the HTML content
    with open(input_file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()

    # Escape backticks and backslashes
    escaped_content = html_content.replace('`', '\\`').replace('\\', '\\\\')

    # Format as a TypeScript string
    ts_content = f"export const {ts_variable_name}: string = `\n{escaped_content}\n`;\n"

    # Write to the output TypeScript file
    with open(output_file_path, 'w', encoding='utf-8') as file:
        file.write(ts_content)

# Example usage
if __name__ == "__main__":
    html_to_ts(
        input_file_path='main.html',
        output_file_path='draftSnippet.ts',
        ts_variable_name='draftSnippet'
    )
