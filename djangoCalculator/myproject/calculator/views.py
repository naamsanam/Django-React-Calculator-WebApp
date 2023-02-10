# views.py

from django.http import JsonResponse

def calculate(request):
    # Extract the calculation parameters from the request
    operation = request.GET.get('operation')
    first_operand = int(request.GET.get('first_operand'))
    second_operand = int(request.GET.get('second_operand'))

    # Perform the calculation
    if operation == 'times':
        result = first_operand * second_operand
    elif operation == 'plus':
        result = first_operand + second_operand
    elif operation == 'minus':
        result = first_operand - second_operand
    elif operation == 'divided_by':
        result = first_operand / second_operand

    # Return the result as a JSON response
    return JsonResponse({'result': result})
