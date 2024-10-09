import os

def define_env(env):
    @env.macro
    def include_file(filename):
        filepath = os.path.join(env.project_dir, filename)
        with open(filepath, 'r') as f:
            return f.read()
