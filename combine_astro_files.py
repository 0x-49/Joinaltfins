import os
from pathlib import Path

def combine_astro_files():
    # Get the project root directory
    project_root = Path(__file__).parent
    src_dir = project_root / 'src'
    
    # Define directories to search
    search_dirs = [
        src_dir / 'pages',
        src_dir / 'components'
    ]
    
    # Output file path
    output_file = project_root / 'combined_astro_files.txt'
    
    # Find all .astro files
    astro_files = []
    for directory in search_dirs:
        if directory.exists():
            astro_files.extend(list(directory.glob('**/*.astro')))
    
    if not astro_files:
        print('No .astro files found!')
        return
    
    print(f'Found {len(astro_files)} .astro files')
    
    # Sort files for consistent output
    astro_files.sort()
    
    # Combine files
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for file_path in astro_files:
            # Add file separator and name
            rel_path = file_path.relative_to(project_root)
            outfile.write(f'\n{"="*80}\n')
            outfile.write(f'FILE: {rel_path}\n')
            outfile.write(f'{"="*80}\n\n')
            
            # Read and write file content
            try:
                content = file_path.read_text(encoding='utf-8')
                outfile.write(content)
                outfile.write('\n')
                print(f'Processed: {rel_path}')
            except Exception as e:
                error_msg = f'Error reading {rel_path}: {str(e)}\n'
                outfile.write(error_msg)
                print(error_msg)
    
    print(f'\nAll files combined into: {output_file.name}')

if __name__ == '__main__':
    combine_astro_files()
